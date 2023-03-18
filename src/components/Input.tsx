import { useState, MutableRefObject, useRef } from 'react';
import Settings from './Settings';
// @ts-ignore
import Recorder from './Recorder';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import React from 'react';



export default function Input({ handleMessage, onRecStart, onBreak, onRecStop }: any) {

  const [prompt, setPrompt] = useState("");
  const [record, setRecord] = useState(false);
  const intervalRef: MutableRefObject<number> = useRef(0);
  const [message, setMessage] = useState<string>("");
  //Public API that will echo messages sent to it back to the client
  const socketUrl = 'wss://continuousgpt.fly.dev/';
  
  const { sendMessage, sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    // display what the error is
    onError: (errorMessage) => {
      // let data = JSON.parse(errorMessage.type)
      // console.log("error ", data)
      handleMessage('WebSockets connection error, please try again or report the issue.')
      // handleErrorMessage(errorMessage)
    },

    onMessage: (dataFromServer) => {
      let data = JSON.parse(dataFromServer.data)
      console.log("full data", data)
      // handleMessage(data)
      const newMessage = message + data.text
      handleMessage(newMessage, data.stream)
      if (data.stream === "stop") {
        setMessage("")
      } else {
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


  const handleStartRec = () => {
    // TODO: factor out prompt to only fire the first time
    const intervalId = setInterval(() => {
      // Not possible. useState updates for the next closure, not the current one.
      handleBreak();
    }, 5000);
    intervalRef.current = intervalId
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
