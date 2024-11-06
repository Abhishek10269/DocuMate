'use client'

import React from 'react'
import { Button } from './ui/button';
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { useRouter } from 'next/navigation';



function Placeholderdocument() {
    const router = useRouter();
 const handleClick = () => {
    router.push("/dashboard/upload");
 }

  return (
    <Button
    onClick={handleClick}
     className='flex flex-col w-64 h-80 items-center rounded-xl bg-gray-200 drop-shadow-md text-gray-400'
    >
    <HiOutlineDocumentAdd style={{ width: '64px', height: '64px' }} />

        <p>Add a document</p>
    </Button>
  )
}

export default Placeholderdocument;
