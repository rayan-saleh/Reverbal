import {useState, useEffect, useCallback} from 'react';
import Settings from './Settings';
// @ts-ignore
import Recorder from './Recorder';

// @ts-ignore

import useWebSocket, { ReadyState } from 'react-use-websocket';
import { ChatGPTAPI } from 'chatgpt'






export default function Input() {

  //Public API that will echo messages sent to it back to the client
  const socketUrl = 'wss://socketsbay.com/wss/v2/1/demo/';
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  // const handleClickChangeSocketUrl = useCallback(
  //   () => setSocketUrl('wss://demos.kaazing.com/echo'),
  //   []
  // );

  const handleClickSendMessage = useCallback(() => sendMessage("prompt"), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];



  // chatGPT
  async function example() {
    const api = new ChatGPTAPI({
      // apiKey: process.env.OPENAI_API_KEY
      apiKey: "O6M7lemlRjLpbSfFHn1KFues"
    })

    const res = await api.sendMessage('Hello World!')
    console.log(res.text)
}






  const [audioData, setAudioData] = useState("");

  const uploadData = (e: any) => {
    setAudioData(e);
  };

useEffect(() => {
    console.log("audioData", audioData)
},[audioData])




  const [prompt, setPrompt] = useState("");

  const uploadPrompt = (e: any) => {
    setPrompt(e);
  };

  useEffect(() => {
    console.log("prompt", prompt)
    // handleClickSendMessage();

},[prompt])



    return (
      <section aria-labelledby="payment-details-heading">
                <form action="#" method="POST">
                  <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="bg-white py-6 px-4 sm:p-6">

            <Settings uploadPrompt={uploadPrompt} />
            <Recorder uploadData={uploadData} />
                    </div>
                  </div>
                </form>


            {/* <button onClick={handleClickChangeSocketUrl}>
              Click Me to change Socket Url
            </button> */}
            {/* <button
              onClick={handleClickSendMessage}
              disabled={readyState !== ReadyState.OPEN}
            >
              Click Me to send 'Hello'
            </button> */}
            <span>The WebSocket is currently {connectionStatus}</span>
            {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
            <ul>
              {messageHistory.map((message:any, idx): any => (
                <span key={idx}>{message ? message.data : null}</span>
              ))}
            </ul>
				 
      </section>
    )
}