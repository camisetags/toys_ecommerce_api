import { z } from 'zod'

export const configsSchema = z.object({
  PORT: z.string().regex(/^\d+$/, 'A string deve conter apenas números.').default('3000')
})

export type Configs = z.infer<typeof configsSchema>

export const configs: Configs = configsSchema.parse(process.env)
