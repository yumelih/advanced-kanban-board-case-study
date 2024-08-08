'use client'

import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import SidebarItem from '@/components/sidebarItem'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import BellIcon from '../assets/bellIcon'

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
      <main className="flex h-[91%] w-full bg-background">
        <div className="bg-sidebarBlue flex h-full w-16 flex-col items-center gap-4 py-8">
          <BellIcon width={30} />
          <BellIcon width={30} />
          <BellIcon width={30} />
          <BellIcon width={30} />
          <BellIcon width={30} className="mt-auto" />
          <BellIcon width={30} />
          <BellIcon width={30} />
          <BellIcon width={30} />
        </div>
        <Sidebar>
          <SidebarItem text="Proje İsim 1" color="bg-red-600" active={true} />
          <SidebarItem text="Proje İsim 2" color="bg-blue-600" />
          <SidebarItem
            text="Proje İsim 3"
            color="bg-yellow-600"
            disabled={true}
          />
          <SidebarItem
            text="Proje İsim 4"
            color="bg-purple-600"
            disabled={true}
          />
        </Sidebar>
        <div></div>
      </main>
    </div>
  )
}

export default Home
