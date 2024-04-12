import { configs } from './configs'
import server from './infra/server'

const app = server.listen(configs.port)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
