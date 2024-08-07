import LoginForm from '@/components/auth/login-form'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense>
      <main className='w-full h-screen flex justify-center items-center'>

        <LoginForm />
      </main>
    </Suspense>
  )
}

export default page