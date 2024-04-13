import React, {  ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer';
const Rootlayout = ({children}:{children:ReactNode}) => {
  return (
    <main className='relative'>
        <Navbar/>
        <div className='flex'>
    <Sidebar/>
    <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
        <div className='w-full'>
          
        </div>

    </section>
        </div>
      {children}

      </main>
  )
}

export default Rootlayout