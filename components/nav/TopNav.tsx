import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const TopNav = () => {
  return (
    <div className='flex items-center justify-between p-5 shadow'>
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
        <Button>
            Login
        </Button>
        </div>
    </div>
  )
}

export default TopNav