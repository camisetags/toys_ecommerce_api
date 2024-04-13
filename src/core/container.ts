import { db } from './infra/database'
import { type UserReposisotry } from '../domain/users/repositories'
import { UserDrizzleReposisotry } from '../domain/users/infra/repositories'

class Container {
  public getUsersRepository = (): UserReposisotry => new UserDrizzleReposisotry(db)
}

export default new Container()
