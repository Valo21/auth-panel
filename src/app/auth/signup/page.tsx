"use client"
import { authRegister } from '@src/app/actions'
import Button from '@src/components/Button'
import Form from '@src/components/Form'
import Input from '@src/components/Input'
import { signIn } from 'next-auth/react'
import React from 'react'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-end justify-center p-24">
      <Form action={authRegister}>
      <h1 className='text-center font-semibold text-3xl mb-6'>Register</h1>
        <Input name='name' type='text' placeholder='Name'/>
        <Input name='surname' type='text' placeholder='Surname'/>
        <Input name='email' type='email' placeholder='Email'/>
        <Input name='password' type="password" placeholder='Password'/>
        <Input name='rpassword' type="password" placeholder='Repeat password'/>
        <div className='flex justify-end mt-2'>
          <Button type='submit' title='Register'/>
        </div>
        <div className='border-[1px] mx-2 my-2 rounded-full border-slate-700/50'/>
        <button type='button' onClick={() => signIn('google')}>Sign up with Google</button>
      </Form>
    </main>
  )
}