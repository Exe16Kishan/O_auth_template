import { auth } from '@/auth'
import React from 'react'

async function page() {
    const session = await auth() 
    console.log(session)
  return (
    <div>dashboard</div>
  )
}

export default page