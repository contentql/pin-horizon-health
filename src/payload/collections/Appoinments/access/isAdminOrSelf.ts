import { Access } from 'payload/config'

export const isAdminOrSelf: Access = ({ req: { user } }) => {
  if (user) {
    const { role } = user

    if (role?.includes('admin')) return true

    return {
      doctor: {
        equals: user.id,
      },
    }
  }

  return false
}
