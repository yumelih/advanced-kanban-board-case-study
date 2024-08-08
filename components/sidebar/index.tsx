import { createContext, Fragment, useEffect, useState } from 'react'
import { getProfile } from '@/actions'
import { LoginResponse, ProfileResponse } from '@/actions/types'
import { SidebarProps } from './types'
import Image from 'next/image'

export const SidebarContext = createContext({
  expanded: true,
})

export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(true)
  const [userProfile, setUserProfile] = useState<ProfileResponse>()

  useEffect(() => {
    let token = ''
    if (localStorage.getItem('user')) {
      const user: LoginResponse['data'] = JSON.parse(
        localStorage.getItem('user')!
      )
      console.log(user)
      token = user?.token
    }
    getProfile(token)
      .then((res) => {
        console.log(res)
        setUserProfile(res)
        // if (!res.status) {
        //   throw res
        // }
      })
      .catch(() => {
        localStorage.removeItem('user')
      })
  }, [])

  return (
    <Fragment>
      <aside className="h-full">
        <nav className="flex h-full flex-col border-r bg-white shadow-sm">
          <div className="flex items-center justify-between p-4 pb-2">
            {expanded && <h1 className="pr-2 text-base font-bold">Projeler</h1>}
            {/* <Image
              src={logo}
              className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`}
            /> */}
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="rounded-md bg-blue-700 px-2 py-1 text-xl text-white hover:bg-blue-600"
            >
              {expanded ? '⇚' : '⇛'}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div className="flex p-3">
            <div
              className={`flex items-center justify-between overflow-hidden transition-all ${expanded ? 'ml-3 w-52' : 'ml-0 w-0'} `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">{userProfile?.data?.fullName}</h4>
                <span className="text-xs text-gray-600">
                  {userProfile?.data?.email}
                </span>
              </div>
            </div>
            <Image width={40} height={40} src="/25.png" alt="25 logo" />
          </div>
        </nav>
      </aside>
    </Fragment>
  )
}
