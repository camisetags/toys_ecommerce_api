import { configs } from './configs'
import container from './core/container'
import server from './core/infra/server'
import { usersRoutes } from './domain/users/infra/routes'

usersRoutes(server, container.getUsersRepository())
const app = server.listen(configs.PORT)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
