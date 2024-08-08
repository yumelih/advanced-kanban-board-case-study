import BellIcon from '@/assets/bellIcon'
import Image from 'next/image'

const LeftSidebarItem = ({ className }: { className?: string }) => {
  return (
    <div
      className={`cursor-pointer rounded-md p-2 hover:bg-gray-600 ${className}`}
    >
      <BellIcon width={24} />
    </div>
  )
}

const LeftSidebar = () => {
  return (
    <div className="flex h-full w-16 flex-col items-center gap-4 bg-sidebarBlue pb-4 pt-8">
      <LeftSidebarItem />
      <LeftSidebarItem />
      <LeftSidebarItem />
      <LeftSidebarItem />
      <LeftSidebarItem className="mt-auto" />
      <LeftSidebarItem />
      <LeftSidebarItem />
      <LeftSidebarItem />
      <div className="mt-4">
        <Image
          className="rounded-full"
          src={'/yusufAkyurek.png'}
          alt="Yusuf Akyurek"
          width={40}
          height={40}
        />
      </div>
    </div>
  )
}

export default LeftSidebar
