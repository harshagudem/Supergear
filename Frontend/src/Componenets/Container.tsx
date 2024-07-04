import React from 'react'
import { twMerge } from 'tailwind-merge'


interface props{
    childern : React.ReactNode,
    className : string,
}

function Container({childern,className}:props) {
    const newClassName = twMerge("max-w-screen-xl mx-auto py-10 px-4 lg:px-0 bd-red-300",className)
  return (
    <div className = {newClassName}>{childern}</div>
  )
}

export default Container