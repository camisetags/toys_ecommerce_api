import type Elysia from 'elysia'
import { type UserReposisotry } from '../repositories'

export function usersRoutes (app: Elysia, userRepo: UserReposisotry): Elysia {
  app.get('/users', async () => {
    return await userRepo.list()
  })

  return app
}
