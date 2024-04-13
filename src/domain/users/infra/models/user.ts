import { pgEnum, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'
import { User as UserModel } from '../../models'

const enumRole = pgEnum('role', ['admin', 'user', 'customer'])

export const UserSchema = pgTable('users', {
  id: uuid('id').primaryKey(),
  name: varchar('name', { length: 60 }).notNull(),
  email: varchar('email', { length: 60 }).notNull().unique(),
  password: text('password').notNull(),
  birth: timestamp('birth').notNull(),
  role: enumRole('role').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  deletedAt: timestamp('deleted_at')
})

type User = typeof UserSchema.$inferSelect | UserModel

export const toDomain = (user: User): UserModel => {
  return new UserModel(user)
}

export const fromDomain = (user: UserModel): User => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    birth: user.birth,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.createdAt,
    deletedAt: user.createdAt
  }
}
