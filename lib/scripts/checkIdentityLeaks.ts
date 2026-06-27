import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const defaultTargets = [
  'README.md',
  'package.json',
  'config',
  'data/static',
  'ftp',
  'app.ts',
  'server.ts',
  'routes',
  'lib',
  'frontend/src/app',
  'frontend/src/hacking-instructor',
  'frontend/src/environments',
  'frontend/src/index.html',
  'frontend/src/assets',
  'frontend/dist/frontend',
  'build'
]

const ignoredPathParts = new Set([
  '.git',
  'node_modules',
  '.angular',
  'coverage',
  '.nyc_output',
  'dist/bom',
  'i18n',
  atobText('SEFMTF9PRl9GQU1FLm1k'),
  'LICENSE'
])

const ignoredPathPatterns = [
  /^build\/test\//,
  /^data\/static\/i18n\//,
  /^frontend\/src\/assets\/i18n\//,
  /^lib\/scripts\/checkIdentityLeaks\.ts$/,
  /\.spec\.ts$/
]

const textFilePattern = /\.(cjs|css|csv|html|js|json|map|md|mjs|pug|scss|svg|ts|txt|xml|ya?ml)$/i

function atobText (value: string): string {
  return Buffer.from(value, 'base64').toString('utf8')
}

function escaped (value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function exactPattern (encodedValue: string): RegExp {
  return new RegExp(`\\b${escaped(atobText(encodedValue))}\\b`, 'i')
}

function flexibleSpacePattern (encodedValue: string): RegExp {
  return new RegExp(`\\b${escaped(atobText(encodedValue)).replace(/\\ /g, '\\s+')}\\b`, 'i')
}

const leakPatterns = [
  { label: 'upstream project name', pattern: flexibleSpacePattern('VGhlIGNvbW11bml0eSBKdWljZSBTaG9w') },
  { label: 'upstream organization', pattern: exactPattern('T1dBU1A=') },
  { label: 'project token', pattern: new RegExp(`\\b${atobText('SnVpY2U=')}\\s*${atobText('U2hvcA==')}\\b`, 'i') },
  { label: 'repository slug', pattern: exactPattern('anVpY2Utc2hvcA==') },
  { label: 'upstream domain', pattern: exactPattern('b3dhc3AtanVpY2Uuc2hvcA==') },
  { label: 'upstream author', pattern: new RegExp(`\\b${atobText('Qmo=')}(?:${atobText('w7Y=')}|${atobText('b2U=')})${atobText('cm4=')}\\s+${atobText('S2ltbWluaWNo')}\\b`, 'i') },
  { label: 'upstream contributor', pattern: flexibleSpacePattern('SmFubmlrIEhvbGxlbmJhY2g=') },
  { label: 'upstream handle', pattern: exactPattern('YmtpbW1pbmljaA==') },
  { label: 'upstream handle', pattern: exactPattern('SjEyOTM0') },
  { label: 'copyright banner', pattern: /\bCopyright\s+\(c\)\s+2014-2026\b/i },
  { label: 'contributor attribution', pattern: new RegExp(`\\b(?:${escaped(atobText('VGhlIGNvbW11bml0eSBKdWljZSBTaG9wIGNvbnRyaWJ1dG9ycw==')).replace(/\\ /g, '\\s+')}|${escaped(atobText('UHJvamVjdCBMZWFkZXJz')).replace(/\\ /g, '\\s+')}|${escaped(atobText('SEFMTF9PRl9GQU1F'))})\\b`, 'i') },
  { label: 'upstream social handle', pattern: exactPattern('b3dhc3BfanVpY2VzaG9w') },
  { label: 'upstream author handle', pattern: new RegExp(`\\b${atobText('YmpvZXJu')}(?:${atobText('T3dhc3A=')}|${atobText('R29vZ2xl')})?\\b`, 'i') },
  { label: 'upstream asset token', pattern: exactPattern('SnVpY2VTaG9w') }
]

async function pathExists (target: string): Promise<boolean> {
  try {
    await stat(target)
    return true
  } catch {
    return false
  }
}

function isIgnored (file: string): boolean {
  const relative = path.relative(process.cwd(), file).split(path.sep).join('/')
  const normalized = file.split(path.sep)
  return normalized.some(part => ignoredPathParts.has(part)) || ignoredPathPatterns.some(pattern => pattern.test(relative))
}

async function collectFiles (target: string): Promise<string[]> {
  if (!await pathExists(target) || isIgnored(target)) {
    return []
  }

  const targetStat = await stat(target)
  if (targetStat.isFile()) {
    return textFilePattern.test(target) ? [target] : []
  }

  const entries = await readdir(target)
  const nested = await Promise.all(entries.map(entry => collectFiles(path.join(target, entry))))
  return nested.flat()
}

function lineNumberForIndex (content: string, index: number): number {
  return content.slice(0, index).split('\n').length
}

async function scanFile (file: string): Promise<string[]> {
  const content = await readFile(file, 'utf8')
  const findings: string[] = []

  for (const leakPattern of leakPatterns) {
    const match = leakPattern.pattern.exec(content)
    if (match?.index !== undefined) {
      findings.push(`${file}:${lineNumberForIndex(content, match.index)} ${leakPattern.label}: ${match[0]}`)
    }
  }

  return findings
}

async function main () {
  const targets = process.argv.slice(2)
  const scanTargets = targets.length > 0 ? targets : defaultTargets
  const files = (await Promise.all(scanTargets.map(target => collectFiles(path.resolve(target))))).flat()
  const findings = (await Promise.all(files.map(scanFile))).flat()

  if (findings.length > 0) {
    console.error('Origin/identity leak signals found:')
    for (const finding of findings) {
      console.error(`- ${path.relative(process.cwd(), finding)}`)
    }
    process.exit(1)
  }

  console.log(`No identity leak signals found in ${files.length} files.`)
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
