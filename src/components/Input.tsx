import { useState, MutableRefObject, useRef } from 'react';
import Settings from './Settings';
// @ts-ignore
import Recorder from './Recorder';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import React from 'react';





export default function Input({handleMessage}: any) {

  const [prompt, setPrompt] = useState("");
  const [record, setRecord] = useState(false);
  const intervalRef: MutableRefObject<number> = useRef(0);
  //Public API that will echo messages sent to it back to the client
  const socketUrl = 'ws://localhost:80/';
  
  // const [messageHistory, setMessageHistory] = useState([]);
  // const [message, setMessage] = useState("");
  const { sendMessage, sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => {
      console.log('WebSocket connection established.');
      // sendMessage('Hello');
      // recordingBool(false);
    },
    // display what the error is
    onError: (e) => console.log(e),

    onMessage: (dataFromServer) => {
      // console.log("message", dataFromServer)
      // json parse the data and then pass .data to the handle message function

      let data = JSON.parse(dataFromServer.data)
      console.log(data.text)

      handleMessage(data.text)
    }

  });


  // useEffect(() => {
  //   if (lastMessage !== null) {
  //     setMessageHistory((prev) => prev.concat(lastMessage));
  //   }
  // }, [lastMessage, setMessageHistory]);



  // const handleClickSendMessage = useCallback(() => {
  //   console.log("sent")
  //   sendMessage(prompt), []
  // });

  // const connectionStatus = {
  //   [ReadyState.CONNECTING]: 'Connecting',
  //   [ReadyState.OPEN]: 'Open',
  //   [ReadyState.CLOSING]: 'Closing',
  //   [ReadyState.CLOSED]: 'Closed',
  //   [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  // }[readyState];



// 



  // const [audio, setAudio] = useState("");

  const handleAudio = (e: any) => {
    
    const regex = /^data:audio\/wav;base64,/;
    const result = e.replace(regex, '');
    // console.log(result)
    // setMessage(message + result)
    


    let audioObj = { 
    event: "media",
    media: result
    }     
    sendJsonMessage(audioObj);
    };

// useEffect(() => {
//     console.log("audio", audio)
//     sendMessage(audio);
// },[audio])



  const handleBreak = () => {
    let jsonBreak: any;
    jsonBreak = JSON.stringify({event: "break"})
    const bytes = new TextEncoder().encode(jsonBreak);
    console.log("sending break message...")
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

    setRecord(true)
  }

  const handleStopRec = (e: any) => {
    if (intervalRef.current != 0) {
      clearInterval(intervalRef.current);
    }
    handleBreak();
    setRecord(false);
  }


  // handlebreaks sends a message to the server every 5 seconds to break the connection
  // const handleBreaks = (bool) => {
  //   setInterval(() => {

  //     let jsonBreak: any;
  //     jsonBreak = JSON.stringify({event: "break"})
  //     const bytes = new TextEncoder().encode(jsonBreak);
  //     sendMessage(bytes);
  //   }, 5000);
  // }

//   useEffect(() => {
//     console.log("prompt", prompt)
//     // handleClickSendMessage();

// },[prompt])



    return (
      
      <section aria-labelledby="payment-details-heading">
                <form action="#" method="POST">
                  {/* <div className="shadow sm:overflow-hidden sm:rounded-md"> */}
                    {/* <div className="bg-white py-6 px-4 sm:p-6"> */}

            
            
            <Settings handlePrompt={handlePrompt} />
            <Recorder 
            record={record} 
            handleAudio={handleAudio} 
            onStartRec={handleStartRec} 
            onStopRec={handleStopRec}
            onBreak={handleBreak} />
                    {/* </div> */}
                  {/* </div> */}
                </form>


            {/* <button onClick={handleClickChangeSocketUrl}>
              Click Me to change Socket Url
            </button> */}
            {/* <button
              onClick={handleClickSendMessage}
              disabled={readyState !== ReadyState.OPEN}
            >
              Click Me to send 'Hello'
            </button>
            <span>The WebSocket is currently {connectionStatus}</span>
            {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
            <ul>
              {messageHistory.map((message:any, idx): any => (
                <span key={idx}>{message ? message.data : null}</span>
              ))}
            </ul> */}
				 
      </section>
    )

}
