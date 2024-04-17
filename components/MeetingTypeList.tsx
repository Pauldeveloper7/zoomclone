'use client'
import React from 'react'
import Homecard from './Homecard'
import { useState } from 'react'
import {useRouter } from 'next/navigation'
import MeetingModel from './MeetingModel'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useUser } from '@clerk/nextjs'

const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<'isScheduleMeeting'|'isJoiningMeeting'|'isInstantMeeting'|undefined>()
  const router = useRouter()
  const {user} = useUser();
  const client = useStreamVideoClient()
  const [values,setValues] = useState({
    dateTime:new Date(),
    description:'',
    link:''
  })
  const [callDetails, setcallDetails] = useState<Call>()
  const createMeeting = async ()=>{
   if(!client || !user) return ;
   try {
    const id = crypto.randomUUID();
    const call = client.call('default',id);
    if(!call) throw new Error('Failed to create call ')
    const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
  const description = values.description || 'Instant meeting' ;
  await call.getOrCreate({
    data:{
      starts_at:startsAt,
      custom:{
        description
      }
    }
  })  
   setcallDetails(call);
   if(!values.description){
    router.push(`/meeting/${call.id}`);
   }
   console.log('Running');
  } catch (error) {
    console.log(error);
    console.log('error hai')
   }
  }
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
     <Homecard
      img={'icons/add-meeting.svg'}  title="New meeting" description="Start an instant meeting"
      handleClick={()=>setMeetingState('isInstantMeeting')} className="bg-orange-1"
     />
     <Homecard
       img={'icons/schedule.svg'}  title="Schedule meeting" description="Plan your meeting"
       handleClick={()=>setMeetingState('isScheduleMeeting')} className="bg-blue-1"
     />
     <Homecard
       img={'icons/recordings.svg'}  title="View Recording" description="Check out your recording"
       handleClick={()=>router.push('/recordings')} className="bg-purple-1"
     />
     <Homecard
       img={'icons/join-meeting.svg'}  title="Join meeting" description="via invitation link"
       handleClick={()=> setMeetingState('isJoiningMeeting')} className="bg-yellow-1"
     />
   <MeetingModel 
   isOpen={meetingState==='isInstantMeeting'}
   onClose={()=> {setMeetingState(undefined)}}
   title="Start an Instant meeting"
   className="text-center"
   buttonText="Start Meeting"
   handleClick={createMeeting}
   />
    </section>
  )
}


export default MeetingTypeList