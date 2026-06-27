import type { Express } from 'express'
import type { Sequelize } from 'sequelize'
import { createApp } from '../../../server'

export async function createTestApp (): Promise<{ app: Express, sequelize: Sequelize }> {
  return await createApp({ inMemoryDb: true })
}
