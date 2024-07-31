import { Access } from 'payload'

export const isAdminOrSelf: Access = ({ req: { user } }) => {
  if (user) {
    const { role } = user

    if (role?.includes('admin')) return true

    return {
      'doctor.value': {
        equals: user.id,
      },
    }
  }

  return false
}
