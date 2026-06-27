import fs from 'node:fs'
import config from 'config'
import { type Request, type Response } from 'express'
import { AllHtmlEntities as Entities } from 'html-entities'

import * as challengeUtils from '../lib/challengeUtils'
import { themes } from '../views/themes/themes'
import { challenges } from '../data/datacache'
import * as utils from '../lib/utils'

const entities = new Entities()

export const getVideo = () => {
  return (req: Request, res: Response) => {
    const path = videoPath()
    if (!path || !fs.existsSync(path)) {
      res.sendStatus(404)
      return
    }
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-')
      const start = parseInt(parts[0], 10)
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1
      const chunksize = (end - start) + 1
      const file = fs.createReadStream(path, { start, end })
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Location': '/assets/public/videos/promo.mp4',
        'Content-Type': 'video/mp4'
      }
      res.writeHead(206, head)
      file.pipe(res)
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4'
      }
      res.writeHead(200, head)
      fs.createReadStream(path).pipe(res)
    }
  }
}

export const promotionVideo = () => {
  return (req: Request, res: Response) => {
    fs.readFile('views/promotionVideo.pug', async function (err, buf) {
      if (err != null) throw err
      let template = buf.toString()
      const subs = getSubsFromFile()

      challengeUtils.solveIf(challenges.videoXssChallenge, () => { return utils.contains(subs, '</script><script>alert(`xss`)</script>') })

      const themeKey = config.get<string>('application.theme') as keyof typeof themes
      const theme = themes[themeKey] || themes['bluegrey-lightgreen']
      template = template.replace(/_title_/g, entities.encode(config.get<string>('application.name')))
      template = template.replace(/_favicon_/g, favicon())
      template = template.replace(/_bgColor_/g, theme.bgColor)
      template = template.replace(/_textColor_/g, theme.textColor)
      template = template.replace(/_navColor_/g, theme.navColor)
      template = template.replace(/_primLight_/g, theme.primLight)
      template = template.replace(/_primDark_/g, theme.primDark)
      template = template.replace(/_logo_/g, utils.extractFilename(config.get('application.logo')))
      const pug = (await import('pug')).default
      const fn = pug.compile(template)
      let compiledTemplate = fn()
      compiledTemplate = compiledTemplate.replace('<script id="subtitle"></script>', '<script id="subtitle" type="text/vtt" data-label="English" data-lang="en">' + subs + '</script>')
      res.send(compiledTemplate)
    })
  }
  function favicon () {
    return utils.extractFilename(config.get('application.favicon'))
  }
}

function getSubsFromFile () {
  const subtitles = config.get<string>('application.promotion.subtitles')
  if (!subtitles) {
    return ''
  }
  const subtitlePath = 'frontend/dist/frontend/assets/public/videos/' + utils.extractFilename(subtitles)
  if (!fs.existsSync(subtitlePath)) {
    return ''
  }
  const data = fs.readFileSync(subtitlePath, 'utf8')
  return data.toString()
}

function videoPath () {
  const configuredVideo = config.get<string>('application.promotion.video')
  if (configuredVideo) {
    return 'frontend/dist/frontend/assets/public/videos/' + utils.extractFilename(configuredVideo)
  }
  return ''
}
