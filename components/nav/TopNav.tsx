import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { LogIn } from 'lucide-react'


const TopNav = () => {
  return (
    <div className='flex items-center justify-center space-x-10 p-5 shadow'>
        <div className='text-2xl font-bold'>
            <Link href='/'>
            <Image
                src='/logos/logo.svg'
                alt='logo'
                width={50}
                height={50}
            />
            </Link>
        </div>
        <div className='flex items-center space-x-2'>
        <SignedOut>
            <SignInButton>

            <LogIn className='h-10 w-10 text-[#5a6acd] cursur-pointer' />
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
    </div>
  )
}

export default TopNav