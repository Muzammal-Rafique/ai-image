'use client'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useImage } from '@/context/image'

const GenerateImageInput = () => {
  const {generateImage} = useImage()
  return (
    <div className='mb-5 flex space-x-2'>
        <Input placeholder='Moutain Lookout' className='p-6' />
        <Button className='p-6' onClick={generateImage}>Generate Image</Button>
    </div>
  )
}

export default GenerateImageInput