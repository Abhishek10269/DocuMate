import React from 'react'
import Link from 'next/link';
import { SignedIn,UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import { FilePlus2 } from 'lucide-react';

function Header() {
  return (
<div className='flex justify-between bg-white shadow-sm p-5 border-b'>
    <Link href="/dashboard" className='text-black-900 text-2xl font-bold'>DocuMate</Link>
    <SignedIn>
    <div className='flex items-center space-x-2'>
        <Button asChild variant="link" className=' flex '>
            <Link href="/dashboard/upgrade">Pricing</Link>
             </Button>

             <Button asChild variant="outline" >
                <Link href="/dashboard">My Document</Link>
             </Button>

             <Button asChild variant="outline" className='border-indigo-600'>
                <Link href="/dashboard/upload">
                <FilePlus2 className='text-indigo-600'/>
                </Link>
             </Button>
             {/* Upgrade button */}
             <UserButton/>

    </div>
    </SignedIn>
</div>
  )
}

export default Header;