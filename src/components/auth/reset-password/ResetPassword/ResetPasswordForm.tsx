'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { trpc } from '@/trpc/client'

const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
  token: z.string(),
})

export function ResetPasswordForm({ token }: { token: string }) {
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onBlur',
    defaultValues: { token, password: '' },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form
  const [message, setMessage] = useState<string | null>(null)
  const [isSubmitting, startTransition] = useTransition()

  const { mutate: resetPassword } = trpc.auth.resetPassword.useMutation({
    onSuccess: () => {
      setMessage('Password reset successfully. Redirecting...')
      setTimeout(() => router.push('/profile'), 2000)
    },
    onError: error => {
      form.setError('password', {
        type: 'manual',
        message:
          error?.message || 'Failed to reset password. Please try again.',
      })
      setMessage(null)
    },
  })

  const onSubmit = async (data: z.infer<typeof resetPasswordSchema>) => {
    resetPassword(data)
  }

  return (
    <main id='content' role='main' className='mx-auto w-full max-w-lg p-6'>
      <div className='mt-7 rounded-xl border-2 border-indigo-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800'>
        <div className='p-4 sm:p-7'>
          <div className='text-center'>
            <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
              Almost there!
            </h1>
            <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
              Please enter a new password to reset.
            </p>
          </div>

          <div className='mt-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid gap-y-4'>
                {message && <p color='green'>{message}</p>}
                <div>
                  <label
                    htmlFor='password'
                    className='mb-2 ml-1 block text-sm font-bold dark:text-white'>
                    New Password
                  </label>
                  <div className='relative'>
                    <input
                      {...register('password')}
                      type='password'
                      id='password'
                      name='password'
                      placeholder='● ● ● ● ● ● ● ●'
                      className='block w-full rounded-md border-2 border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500'
                    />
                  </div>
                  {errors.password && (
                    <p
                      className='mt-2 hidden text-xs text-red-600'
                      id='email-error'>
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='mt-3 inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-opacity-50 dark:focus:ring-offset-gray-800'>
                  {isSubmitting ? 'Processing...' : 'Reset Password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
