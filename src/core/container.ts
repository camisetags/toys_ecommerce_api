import { db } from './infra/database'
import { type UserReposisotry } from '../domain/users/repositories'
import { UserDrizzleReposisotry } from '../domain/users/infra/repositories'

class Container {
  private static userRepo: UserReposisotry

  constructor () {
    Container.userRepo = new UserDrizzleReposisotry(db)
  }

  public getUsersRepository = (): UserReposisotry => Container.userRepo
}

export default new Container()
