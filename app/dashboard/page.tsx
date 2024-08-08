'use client'

import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    let userStringified = localStorage.getItem('user')
    let user
    if (userStringified !== null) {
      user = JSON.parse(localStorage.getItem('user')!)
    }

    if (!user && !user?.token) {
      router.replace('/auth/login')
    }
  }, [])

  return (
    <div className="h-full w-full">
      <Navbar />
      <main className="h-[91%] w-full bg-background">
        <div></div>
      </main>
    </div>
  )
}

export default Home
