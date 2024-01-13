import React from 'react'

export default function Input(props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <input className='px-2 py-1 rounded-sm outline-none hover:scale-105 transition-transform duration-300' {...props} />
  )
}
