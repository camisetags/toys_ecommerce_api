import { db } from './infra/database'
import { type UserReposisotry } from '../domain/users/repositories'
import { UserDrizzleReposisotry } from '../domain/users/infra/repositories'

const userRepo = new UserDrizzleReposisotry(db)

const Container = {
  getUsersRepository: (): UserReposisotry => userRepo
}

export default Container
