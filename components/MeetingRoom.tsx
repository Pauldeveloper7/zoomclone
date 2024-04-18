'use client'
import { PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk';
import {useState} from 'react'
type callLayoutType = 'grid' | 'speaker-left' | 'speaker-right'
const MeetingRoom = () => {
  const [layout, setLayout] = useState<callLayoutType>('speaker-left');
  const callLayout = ()=> {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout/>
      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition="left"/>
      default:
        return <SpeakerLayout participantsBarPosition="right"/>
    }
  }
  return (
    <section className='relative h-screen w-full overflow-hidden pt-4  text-white'>
        <div  className='relative flex size-full items-center justify-center '>
        <div className=' flex size-full max-w-[1000px] items-center '>
          callLayout()
        </div>
        </div>
    </section>
  )
}

export default MeetingRoom