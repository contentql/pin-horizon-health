// 'use server'

// import axios from 'axios'

// import { payloadAPI } from '@/utils/payloadAPI'

// type SignInInput = {
//   email: string
//   password: string
// }

// export const signIn = async ({ email, password }: SignInInput) => {
//   try {
//     // Make API call to sign in
//     const result = await payloadAPI('/users/login', {
//       method: 'POST',
//       data: {
//         email,
//         password,
//       },
//     })

//     // ? use this logic while using local api if cookies issue exist.
//     // Set authentication token in cookie if present
//     // if (result?.token) {
//     //   const cookieStore = cookies()
//     //   cookieStore.set('payload-token', result.token, {
//     //     httpOnly: true,
//     //     secure: process.env.NODE_ENV !== 'development',
//     //     maxAge: 60 * 60 * 24 * 7, // 1 week
//     //     path: '/',
//     //   })
//     // }

//     return result
//   } catch (error: any) {
//     if (axios.isAxiosError(error) && error.response) {
//       throw new Error(error.response.data.message || 'Invalid credentials')
//     }
//     throw new Error('An unexpected error occurred')
//   }
// }
