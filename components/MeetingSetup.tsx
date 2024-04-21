'use client'
import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import {useState,useEffect} from 'react'
import { Button } from './ui/button';


const MeetingSetup = ({setIsSetComplete}:{setIsSetComplete:(value:boolean)=> void}) => {
    const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(false);
    const call = useCall();
    if (!call) return (
      <p className="text-center text-3xl font-bold text-white">
        Call Not Found
      </p>
    );
    const handleMicCamToggle = () => {
      setIsMicCamToggleOn((prev) => {
        if (prev) {
          call.camera.disable();
          call.microphone.disable();
        } else {
          call.camera.enable();
          call.microphone.enable();
        }
        return !prev;
      });
    };
  
    const handleJoinMeeting = () => {
      call.join();
      setIsSetComplete(true);
    };
   
    
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
        <h1 className='text-2xl font-bold'>
           Setup
        </h1> 
          <VideoPreview/>
        <div className='flex h-16  items-center justify-center gap-3'>
       <label  className='flex items-center justify-center gap-2 font-medium'>
        <input type="checkbox" checked={isMicCamToggleOn}  onChange={handleMicCamToggle} />
        Join with mic and camera off 
       </label>
       <DeviceSettings/>
        </div>
        <Button className='rounded-md  bg-green-500 px-4 py-2.5' onClick={handleJoinMeeting}>
         Join meeting
        </Button>
    </div>
  )
}

export default MeetingSetup