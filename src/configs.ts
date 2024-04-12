import { z } from 'zod'

export const configsSchema = z.object({
  port: z.number()
})

export type Configs = z.infer<typeof configsSchema>

export const configs: Configs = configsSchema.parse(process.env)
