import { AdminEntity } from 'nestjs-admin'
import { User } from './user.entity'

export class UserAdmin extends AdminEntity {
  entity = User
  listDisplay = ['id', 'firstName', 'lastName', 'email', 'createdDate']
  fields = ['firstName', 'lastName', 'createdDate']
}