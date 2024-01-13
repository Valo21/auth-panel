"use client"
import { SessionProvider } from 'next-auth/react'
import React, { PropsWithChildren } from 'react'

export default function Session(props: PropsWithChildren) {
  return (
    <SessionProvider>
        {props.children}
    </SessionProvider>
  )
}
