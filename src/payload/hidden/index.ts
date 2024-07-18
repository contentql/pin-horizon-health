import { ClientUser } from 'payload/auth'

export const visibleToAdminOnly = ({ user }: ClientUser) => {
  return !(user?.role === 'admin')
}
