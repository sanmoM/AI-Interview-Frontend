import React from 'react'

export default function InnerWrapper({children}) {
  return (
    <div className='bg-white rounded-2xl md:rounded-4xl p-4 md:p-6 lg:p-8 shadow-lg h-full flex flex-col'>
        {children}
    </div>
  )
}
