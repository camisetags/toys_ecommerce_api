import { db } from './infra/database'
import { type UserReposisotry } from '../domain/users/repositories'
import { UserDrizzleReposisotry } from '../domain/users/infra/repositories'
import { type DrizzleDB } from './infra'

class Container {
  public dbConnection = (): DrizzleDB => db
  public getUsersRepository = (): UserReposisotry => new UserDrizzleReposisotry(this.dbConnection())
}

export default new Container()
