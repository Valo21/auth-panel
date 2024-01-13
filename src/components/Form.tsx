import React from 'react'

export default function Form(props: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>) {
  return (
    <form className='flex flex-col px-6 py-16 gap-2 text-xl bg-slate-100 rounded-sm animate-[fade-in-side_1s_ease-in-out_1]' {...props}/>
  )
}
