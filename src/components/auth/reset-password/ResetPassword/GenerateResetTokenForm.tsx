'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { trpc } from '@/trpc/client'

const generateTokenSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

export function GenerateResetTokenForm() {
  const form = useForm<z.infer<typeof generateTokenSchema>>({
    resolver: zodResolver(generateTokenSchema),
    mode: 'onBlur',
    defaultValues: { email: '' },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form
  const [message, setMessage] = useState<string | null>(null)

  const { mutate: forgotPassword, isPending: isForgotPasswordPending } =
    trpc.auth.forgotPassword.useMutation({
      onSuccess: () => {
        reset()
        setMessage(
          "Reset link sent to your email. Don't forget to check your spam inbox!",
        )
      },
      onError: error => {
        form.setError('email', {
          type: 'manual',
          message: error?.message,
        })
        setMessage(null)
      },
    })

  const onSubmit = async (data: z.infer<typeof generateTokenSchema>) => {
    forgotPassword(data)
  }

  return (
    <main id='content' role='main' className='mx-auto w-full max-w-lg p-6'>
      <div className='mt-7 rounded-xl border-2 border-indigo-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800'>
        <div className='p-4 sm:p-7'>
          <div className='text-center'>
            <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
              Forgot password?
            </h1>
            <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
              Remember your password?
              <Link
                className='pl-1 font-medium text-blue-600 decoration-2 hover:underline'
                href='/sign-in'>
                SignIn here
              </Link>
            </p>
          </div>

          <div className='mt-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid gap-y-4'>
                {message && <p color='green'>{message}</p>}
                <div>
                  <label
                    htmlFor='email'
                    className='mb-2 ml-1 block text-sm font-bold dark:text-white'>
                    Email address
                  </label>
                  <div className='relative'>
                    <input
                      {...register('email')}
                      type='email'
                      id='email'
                      name='email'
                      className='block w-full rounded-md border-2 border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500'
                      aria-describedby='email-error'
                    />
                  </div>
                  {errors.email && (
                    <p
                      className='mt-2 hidden text-xs text-red-600'
                      id='email-error'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <button
                  type='submit'
                  disabled={isForgotPasswordPending}
                  className='mt-3 inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-opacity-50 dark:focus:ring-offset-gray-800'>
                  {isForgotPasswordPending ? 'Sending...' : 'Send Reset Link'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
