import { z } from 'zod'

export const configsSchema = z.object({
  PORT: z.string().regex(/^\d+$/, 'A string deve conter apenas números.').default('3000'),
  NODE_ENV: z.string().default('development'),
  POSTGRES_URL: z.string().default('postgresql://toy:casablanca@localhost:5432/toys_db')
})

export type Configs = z.infer<typeof configsSchema>

export const configs: Configs = configsSchema.parse(process.env)
