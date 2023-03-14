import {useState, useEffect, useCallback} from 'react';
import Settings from './Settings';
// @ts-ignore
import Recorder from './Recorder';


import useWebSocket, { ReadyState } from 'react-use-websocket';
// import { ChatGPTAPI } from 'chatgpt'






export default function Input({handleMessage}: any) {

  //Public API that will echo messages sent to it back to the client
  const socketUrl = 'wss://a0e0-2a0c-5bc0-40-3e3b-ccc1-c65c-ead4-558c.eu.ngrok.io/';
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
    

    const regex = /^data:audio\/webm;codecs=opus;base64,/;
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




  const [prompt, setPrompt] = useState("");

  const handlePrompt = (e: any) => {
    setPrompt(e);
  };

  let intervalID: number;

  const recordingBool = (e: boolean) => {

   
    console.log("RECORDING:", e)


    if (e === true) {
      console.log("prompt", prompt)
      let jsonPrompt: any;
      jsonPrompt = JSON.stringify({event: "prompt", prompt: prompt})
      const bytes = new TextEncoder().encode(jsonPrompt);
      sendMessage(bytes);

     intervalID = setInterval(() => {
        console.log("break")
        let jsonBreak: any;
        jsonBreak = JSON.stringify({event: "break"})
        const bytes = new TextEncoder().encode(jsonBreak);
        sendMessage(bytes);
      }, 5000);
    

    } else {

      if (intervalID) {
        clearInterval(intervalID);
      }

      let jsonBreak: any;
      jsonBreak = JSON.stringify({event: "break"})
      const bytes = new TextEncoder().encode(jsonBreak);
      sendMessage(bytes);
    }

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
            <Recorder handleAudio={handleAudio} recordingBool={recordingBool} />
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
