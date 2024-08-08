import BellIcon from '@/app/assets/bellIcon'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="flex h-[9%] items-center gap-4 bg-white p-4">
      <Image
        className="cursor-pointer"
        alt="karga karga logo"
        src="/kargakarga.png"
        width={150}
        height={36}
      />
      <BellIcon
        width={16}
        className="ml-auto cursor-pointer hover:scale-95 hover:opacity-90"
      />
      <BellIcon
        width={16}
        className="cursor-pointer hover:scale-95 hover:opacity-90"
      />
      <Image width={40} height={40} src="/25.png" alt="25 logo" />
    </nav>
  )
}

export default Navbar
