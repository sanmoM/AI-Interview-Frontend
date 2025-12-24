import { cn } from '@/utils/cn'
import React from 'react'

export default function InnerWrapper({children, className}) {
  return (
    <div className={cn('bg-white rounded-2xl md:rounded-4xl p-4 md:p-6 lg:p-8 shadow-lg flex flex-col', className)}>
        {children}
    </div>
  )
}
