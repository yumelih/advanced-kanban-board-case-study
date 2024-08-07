'use client'

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      WAR
    </main>
  )
}

export default Home
