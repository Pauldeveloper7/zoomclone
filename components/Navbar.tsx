import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
const Navbar = () => {
  return (
    <nav className=' flex flex-between fixed z-50 w-full
    bg-dark-1 px-6 py-4 lg:px-10
    '>
      <Link href={'/'} className='flex items-center gap-1'>
        <Image
          src='/icons/facetoface.png'
          alt='FaceToFace logo'
          width={32}
          height={32}
          className='max-sm:size-10 rounded-full'
          />
          <p className='text-[26px] font-extrabold
          text-white max-sm:hidden
          '>FaceToFace</p>
        </Link>
        <div className='flex-between gap-5'>
         {/* cleak for user management  */}
         <SignedIn>
          <UserButton/>
         </SignedIn>
         <SignedOut>
          <UserButton/>
         </SignedOut>
         <MobileNav/>
        </div>
    </nav>
  )
}

export default Navbar