import {useState} from 'react';
import AudioRecorder from "./AudioRecorder";

import AudioVisualiser from './AudioVisualizer';
import { useMediaStream } from '../contexts/MediaStreamContext';
// import Visualisation from './Visualisation';
import Settings from './Settings';



export default function Input() {
    // let [recordOption, setRecordOption] = useState("video");

	// const toggleRecordOption = (type: any) => {
	// 	return () => {
	// 		setRecordOption(type);
	// 	};
	// };

    // visualiser
    const { stream, start, stop } = useMediaStream();

    const toggleMic = () => {
        stream ? stop() : start()
        console.log("toggleMic", toggleMic)
    };

    return (
    <section aria-labelledby="payment-details-heading">
                <form action="#" method="POST">
                  <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="bg-white py-6 px-4 sm:p-6">
                    <AudioRecorder />
            <Settings/>
                    </div>
                  </div>
                </form>
                {/* <h1>React Media Recorder</h1> */}
				 
              </section>
    )
}