import { ClientUser } from 'payload'

export const visibleToAdminOnly = ({ user }: ClientUser) => {
  return !(user?.role === 'admin')
}
