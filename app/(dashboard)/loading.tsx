import { LoaderCircle } from 'lucide-react'
import React from 'react'

function Loading() {
  return (
    <div className='absolute top-1/2 left-1/2'>
      <LoaderCircle className='animate-spin' />
    </div>
  )
}

export default Loading