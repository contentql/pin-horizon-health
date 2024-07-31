'use client'

import { GenerateResetTokenForm } from './GenerateResetTokenForm'
import { ResetPasswordForm } from './ResetPasswordForm'

interface Props {
  token: string | null
}

const ResetPassword: React.FC<Props> = ({ token }) => {
  return token ? (
    <ResetPasswordForm token={token} />
  ) : (
    <GenerateResetTokenForm />
  )
}

export default ResetPassword
