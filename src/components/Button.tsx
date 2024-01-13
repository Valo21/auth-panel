import React from 'react'

export default function Button(props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button className='px-2 py-1 bg-slate-700 text-white rounded-sm hover:scale-105 focus:scale-95 transition-transform duration-300' {...props}>{props.title}</button>
  )
}
