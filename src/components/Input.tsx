import { useState, MutableRefObject, useRef } from 'react';
import Settings from './Settings';
// @ts-ignore
import Recorder from './Recorder';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import React from 'react';
import StreamingOptions from './StreamingOptions';



export default function Input({ handleMessage, onRecStart, onBreak, onRecStop }: any) {

  const [prompt, setPrompt] = useState("");
  const [record, setRecord] = useState(false);
  const intervalRef: MutableRefObject<number> = useRef(0);
  const [message, setMessage] = useState<string>("");
  const [mode , setMode] = useState<string>("Time-based");
  const [time, setTime] = useState<number>(5000);
  //Public API that will echo messages sent to it back to the client
  const socketUrl = 'wss://continuousgpt.fly.dev/';
  
  const { sendMessage, sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    },

    // if doesnt connect, handleerror will be called
    // onClose: () => {
    //   handleMessage("error", `WebSocket connection failed`)
    // },

    // display what the error is
    onError: () => {
      handleMessage("error", 'WebSockets connection error, please try again or report the issue.')
    },

    onMessage: (dataFromServer) => {
      let data = JSON.parse(dataFromServer.data)
      console.log("full data", data)
      // handleMessage(data)
      const newMessage = message + data.text
      handleMessage(newMessage, data.stream)
      if (data.stream === "stop") {
        setMessage("")
      } else if (data.error) {
        handleMessage("error", data.error)
      }
      else {
        setMessage(newMessage)
      }

      
    }

  });



  const handleAudio = (e: any) => {
    
    const regex = /^data:audio\/wav;base64,/;
    const result = e.replace(regex, '');


    let audioObj = { 
    event: "media",
    media: result
    }     
    sendJsonMessage(audioObj);
    };



  const handleBreak = () => {
    let jsonBreak: any;
    jsonBreak = JSON.stringify({event: "break"})
    const bytes = new TextEncoder().encode(jsonBreak);
    console.log("sending break message...")
    onBreak();
    sendMessage(bytes);
  }
 

  const handlePrompt = (e: any) => {
    setPrompt(e);
  };


  const streamingMethod = (settings: any) => {
    setMode(settings.name);
    console.log("settings.name", settings.name)
  };

  const handleTime = (e: number) => {
    let seconds = e*1000
    setTime(seconds);
  };

  const handleClick = () => {

    if(mode === "Click-based"){

      handleBreak();
      // console.log("Recording started...")
      // console.log("prompt", prompt)
      // let jsonPrompt: any;
      // jsonPrompt = JSON.stringify({event: "prompt", prompt: prompt})
      // const bytes = new TextEncoder().encode(jsonPrompt);
      // sendMessage(bytes); 
      // setRecord(true);
      // onRecStart();

    }
  }




  const handleStartRec = () => {
    // TODO: factor out prompt to only fire the first time

    if (mode === "Time-based") {
    const intervalId = setInterval(() => {
      // Not possible. useState updates for the next closure, not the current one.
      handleBreak();
    }, time);
  
    intervalRef.current = intervalId
  }
    console.log("Recording started...")
    console.log("prompt", prompt)
    let jsonPrompt: any;
    jsonPrompt = JSON.stringify({event: "prompt", prompt: prompt})
    const bytes = new TextEncoder().encode(jsonPrompt);
    sendMessage(bytes);
    setRecord(true);
    onRecStart();


    

  }

  const handleStopRec = (e: any) => {
    if (intervalRef.current != 0) {
      clearInterval(intervalRef.current);
    }
    setRecord(false);
    onRecStop();
    handleBreak();
  }





    return (
      
      <section aria-labelledby="payment-details-heading">
                <form action="#" method="POST">
            
            
            <Settings handlePrompt={handlePrompt} />
            <StreamingOptions streamingMethod={streamingMethod} handleTime={handleTime} handleClick={handleClick}/>
            <Recorder 
            record={record} 
            handleAudio={handleAudio} 
            onStartRec={handleStartRec} 
            onStopRec={handleStopRec}
            onBreak={handleBreak} />
                </form>


      </section>
    )

}
