import React from 'react'
import Documents from '@/components/Documents';

function dashboard() {
  return (
    <div className='h-full max-w-7xl mx-auto'>
      <h1 className='text-3xl p-5 bg-gray-100 font-extralight text-indigo-600'>
        My Document
      </h1>
      {/* documents */}
      <Documents/>
    </div>
  )
}

export default dashboard;