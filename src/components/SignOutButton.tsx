"use client"
import React from 'react'
import Button from './Button'
import { signOut } from 'next-auth/react'

export default function SignOutButton() {
  return (
    <Button onClick={()=> signOut()} title='Sign out'/>
  )
}
