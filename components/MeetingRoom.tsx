'use client'
import { cn } from '@/lib/utils';
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CallControls, CallParticipantsList, CallingState, PaginatedGridLayout, SpeakerLayout, useCallStateHooks } from '@stream-io/video-react-sdk';
import {useState} from 'react'
import { LayoutList,  Users2Icon } from 'lucide-react';
import EndCallButton from './EndCallButton'
import { useRouter, useSearchParams } from 'next/navigation';
import Loader from './Loader';
type callLayoutType = 'grid' | 'speaker-left' | 'speaker-right'
const MeetingRoom = () => {
  const [layout, setLayout] = useState<callLayoutType>('speaker-left');
  const [showParticipants, setShowParticipants] = useState(false);
  const {useCallCallingState} = useCallStateHooks();
  const searchParams = useSearchParams();
  const isPersonalRoom  = !!searchParams.get('personal')
  const callingState =  useCallCallingState();
  if(callingState !== CallingState.JOINED) return  <Loader/> ;
    
  const CallLayout = ()=> {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout/>
      case 'speaker-left':
        return <SpeakerLayout participantsBarPosition="left"/>
      default:
        return <SpeakerLayout participantsBarPosition="right"/>
    }
  }
  const router = useRouter();
  return (
    <section className='relative h-screen w-full overflow-hidden pt-4  text-white'>
        <div  className='relative flex size-full items-center justify-center '>
        <div className=' flex size-full max-w-[1000px] items-center '>
        <CallLayout/>
        </div>
        <div className={cn('h-[cal(100vh-86px)] hidden ml-2' , {'show-block':showParticipants})}>  
          <CallParticipantsList onClose={()=> setShowParticipants(false)}/>
        </div>
        </div>
        <div className='fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap'>
                <CallControls onLeave={()=>router.push('/')} />
<DropdownMenu>
<div className='flex items-center'>
  <DropdownMenuTrigger className=' cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]'>
    <LayoutList size={20} className='text-white backdrop-contrast-50' />
  </DropdownMenuTrigger>
  </div>

  <DropdownMenuContent className='border-dark-1 bg-dark-1 text-white'>
    {['Grid', 'Speaker-Left', "Speaker-Right" ].map((item,index)=>(
      <div key={index}>
          <DropdownMenuItem 
          className='cursor-pointer'
          onClick={()=>{setLayout(item.toLowerCase() as callLayoutType )}}
          >{item}
          </DropdownMenuItem>
          <DropdownMenuSeparator  className='border-dark-1'/>
      </div>
    ))}
  </DropdownMenuContent>
</DropdownMenu>
   <button onClick={()=> setShowParticipants((prev)=> !prev)}>
    <div className=' cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]'>
        <Users2Icon  size={20} className='text-white'/>
    
    </div>
   </button>
   {!isPersonalRoom && <EndCallButton />}
   
        </div>
    </section>
  )
}

export default MeetingRoom
