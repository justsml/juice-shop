import path from 'node:path'
import * as utils from '../utils'
import logger from '../logger'
import { copyFile } from 'node:fs/promises'
import { glob } from 'glob'

const restoreOverwrittenFilesWithOriginals = async () => {
  await copyFile(path.resolve('data/static/legal.md'), path.resolve('ftp/legal.md'))

  try {
    const files = await glob(path.resolve('data/static/i18n/*.json'), { windowsPathsNoEscape: true })
    await Promise.all(
      files.map(async (filename: string) => {
        await copyFile(filename, path.resolve('i18n/', filename.substring(filename.lastIndexOf('/') + 1)))
      })
    )
  } catch (err) {
    logger.warn('Error listing JSON files in /data/static/i18n folder: ' + utils.getErrorMessage(err))
  }
}

export default restoreOverwrittenFilesWithOriginals
