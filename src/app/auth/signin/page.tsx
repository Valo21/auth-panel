"use client"
import Button from '@src/components/Button'
import Form from '@src/components/Form'
import Input from '@src/components/Input'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

export default function Page() {
  const [formData, setFormData] = useState<SignUpFormValues>({
    email: '',
    password: ''
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    const {name, value} = e.target;
    setFormData((state)=>({
      ...state,
      [name]: value
    }))
  }

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();

    if (formData.email === ''){
      alert('Email input empty')
      return;
    }
    if (formData.password === ''){
      alert('Password input empty')
      return;
    }

    signIn('credentials', {...formData, callbackUrl: '/'});
  }

  return (
    <main className="flex min-h-screen flex-col items-center md:items-end justify-center p-24">
      <Form onSubmit={handleSubmit}>
        <h1 className='text-center font-semibold text-3xl mb-6'>Login</h1>
        <Input name='email' type='email' value={formData.email} onChange={handleChange} placeholder='Email'/>
        <Input name='password' type="password" value={formData.password} onChange={handleChange} placeholder='Password'/>
        <div className='flex justify-end mt-2'>
          <Button type='submit' title='Sign in'/>
        </div>
        <div>Dont have an account? <Link className='text-cyan-600' href='/auth/signup'>Create one</Link></div>
        <div className='border-[1px] mx-2 my-2 rounded-full border-slate-700/50'/>
        <button type='button' onClick={() => signIn('google')}>Sign in with Google</button>
      </Form>
    </main>
  )
}
