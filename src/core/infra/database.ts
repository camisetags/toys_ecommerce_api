import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'
import { UserSchema } from '../../domain/users/infra/models/user'
import { configs } from '../../configs'

const client = new Client({
  connectionString: configs.POSTGRES_URL
})

await client.connect()
export const db = drizzle(client, {
  schema: {
    user: UserSchema
  }
})

export type DrizzleDB = typeof db
