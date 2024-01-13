"use client"
import Button from '@src/components/Button'
import Form from '@src/components/Form'
import Input from '@src/components/Input'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function Page() {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    if (!e.target.email || e.target.email.value === ''){
      return;
    }
    if (!e.target.password || e.target.password.value === ''){
      return;
    }

    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    signIn('credentials', {...data, callbackUrl: '/'});
  }

  return (
    <main className="flex min-h-screen flex-col items-center md:items-end justify-center p-24">
      <Form onSubmit={handleSubmit}>
        <h1 className='text-center font-semibold text-3xl mb-6'>Login</h1>
        <Input name='email' type='email' placeholder='Email'/>
        <Input name='password' type="password" placeholder='Password'/>
        <div className='flex justify-end mt-2'>
          <Button type='submit' title='Sign in'/>
        </div>
        <div>Dont have an account? <Link href='/auth/signup'>Create One</Link></div>
        <div className='border-[1px] mx-2 my-2 rounded-full border-slate-700/50'/>
        <button type='button' onClick={() => signIn('google')}>Sign in with Google</button>
      </Form>
    </main>
  )
}
