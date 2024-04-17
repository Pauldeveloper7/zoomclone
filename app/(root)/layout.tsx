import React, {  ReactNode } from 'react'
import { StreamVideoProvider } from '@/providers/StreamClientProvider';
const Rootlayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
     {children}
     </StreamVideoProvider>
      </main>
  )
}

export default Rootlayout