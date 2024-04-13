import { type User } from './models'

export interface UserReposisotry {
  create: (user: User) => Promise<User>
  find: (id: string) => Promise<User>
  update: (user: User) => Promise<User>
  delete: (id: string) => Promise<void>
  list: () => Promise<User[]>
}
