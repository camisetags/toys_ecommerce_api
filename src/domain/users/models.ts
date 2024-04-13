export class User {
  public id: string
  public name: string
  public birth: Date
  public email: string
  public password: string
  public role: 'admin' | 'user' | 'customer'
  public createdAt: Date
  public updatedAt: Date
  public deletedAt: Date | null

  constructor (props: User) {
    this.id = props.id
    this.name = props.name
    this.birth = props.birth
    this.email = props.email
    this.password = props.password
    this.role = props.role
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
