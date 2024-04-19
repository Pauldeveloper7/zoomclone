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
    );1
    useEffect(() => {
       const func = async  ()=>{
       if (isMicCamToggleOn) {
         await call?.camera.disable();
         await  call?.microphone.disable();
      } 
      else{
        await call?.camera.enable();
        await call?.microphone.enable();
      }
    }
    func();
    }, [isMicCamToggleOn, call?.camera, call?.microphone]);
    
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
        <h1 className='text-2xl font-bold'>
           Setup
        </h1> 
          <VideoPreview/>
        <div className='flex h-16  items-center justify-center gap-3'>
       <label  className='flex items-center justify-center gap-2 font-medium'>
        <input type="checkbox" checked={isMicCamToggleOn}  onChange={(e)=> setIsMicCamToggleOn(e.target.checked)} />
        Join with mic and camera off 
       </label>
       <DeviceSettings/>
        </div>
        <Button className='rounded-md  bg-green-500 px-4 py-2.5' onClick={()=>{call.join(); setIsSetComplete(true)}}>
         Join meeting
        </Button>
    </div>
  )
}

export default MeetingSetup