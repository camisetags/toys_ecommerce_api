import { type DrizzleDB } from '../../../core/infra'
import { type UserReposisotry } from '../repositories'
import { type User } from '../models'
import { UserSchema, toDomain } from './models/user'
import { eq } from 'drizzle-orm'
import { NotFoundError } from 'elysia'

export class UserDrizzleReposisotry implements UserReposisotry {
  constructor (
    private readonly db: DrizzleDB
  ) {}

  async create (user: User): Promise<User> {
    const [usr] = await this.db.insert(UserSchema).values(user).returning()
    return toDomain(usr)
  }

  async find (id: string): Promise<User> {
    const usr = await this.db.query
      .user.findFirst({ where: eq(UserSchema.id, id) })

    if (usr === undefined) {
      throw new NotFoundError('User not found')
    }

    return toDomain(usr)
  }

  async update (user: any): Promise<User> {
    throw new Error('Method not implemented.')
  }

  async delete (id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async list (): Promise<User[]> {
    const usrs = await this.db.query.user.findMany()
    return usrs.map(toDomain)
  }
}
