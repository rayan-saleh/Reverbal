import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Input from './components/Input'
import Output from './components/Output'
import { useState, useEffect } from 'react'
import React from "react";
import ErrorMessage from './components/ErrorMessage';


export default function Example() {
  const [output, setOutput] = useState<any[]>([]);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [breakCount, setBreakCount] = useState<number>(0);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  
  const handleRecStart = () => {
    setOutput([...output, "Waiting for response..."])
    setIsRecording(true)
  }


  
  const handleMessage = (message: any) => {
    const arr = [...output];
    setShowErrorModal(false);

    if (message.text) {
      if (isRecording === false && breakCount === arr.length) {
        arr[arr.length - 1] = message.text;
        setOutput(arr);
  
      } else {
        arr.splice(-1, 0, message.text);
        setOutput(arr);
      }
      
    }else if (message.error){ //if api error
      setShowErrorModal(true);
      setErrorMessage(message.error);
      

    }

    else{ //if websockets error
      console.log("message: " + message)
      setShowErrorModal(true);
      setErrorMessage(message);

    }


    
    
  };

  const handleBreak = () => {
    setBreakCount(breakCount + 1);
  };

  const handleRecStop = () => {
    setIsRecording(false);
  };

  return (
    <div className="relative mt-10 isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-8 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 items-center lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          
          <div className="flex justify-center lg:justify-start">
          <img
            className="inline-flex h-14 w-14"
            src="/ConversationGPT_logo.png"
            alt="Your Company"
          />

          

            <h1 className="inline-flex items-center	 text-3xl font-bold tracking-tight  text-gray-900 sm:text-3xl">
            Reverbal
          </h1>
          </div>
          <div className="mt-24 mb-2 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Just shipped v0.1</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </a>
          </div>
          <h1 className="mb-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Real-time chatbot for your conversations
          </h1>
 
          {showErrorModal && <ErrorMessage message={errorMessage} />}
          <Input handleMessage={handleMessage} onRecStart={handleRecStart} onBreak={handleBreak} onRecStop={handleRecStop} />
        </div>
        <div className="	mx-auto mt-16 w-8/12 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl w-8/12 flex-none sm:max-w-5xl lg:max-w-none">
            <div className="overflow-y-auto h-full -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Output value={output} />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




