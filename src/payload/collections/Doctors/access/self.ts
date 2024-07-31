import { Access } from 'payload'

export const self: Access = ({ req: { user, context } }) => {
  if (user) {
    const { role } = user

    if (role?.includes('admin')) return true

    return false
  }

  return false
}
