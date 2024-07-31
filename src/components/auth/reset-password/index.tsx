import React from 'react'

import ResetPassword from './ResetPassword'

interface Props {
  token: string | null
}

const ResetPasswordView: React.FC<Props> = ({ token }) => {
  return (
    <div className='my-auto flex h-full justify-center pb-10 pt-[200px]'>
      <ResetPassword token={token} />
    </div>
  )
}

export default ResetPasswordView
