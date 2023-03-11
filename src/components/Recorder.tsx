
// @ts-ignore
import { ReactMic } from 'react-mic';
import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid'

 
export const Recorder = ({handleAudio, recordingBool}: any) => {
  const [record, setRecord] = useState(false)

  const startRecording = () => { 
    setRecord(true)
    recordingBool(true)
  }

  const stopRecording = () => {
    setRecord(false)
    recordingBool(false)

  }
 
  const onData = (recordedBlob: any) => {
    console.log('chunk of real-time data is: ', recordedBlob);

    var reader = new FileReader();
    reader.readAsDataURL(recordedBlob); 
    reader.onloadend = function() {
      var base64data = reader.result;                
      handleAudio(base64data)
      // startRecording();
      
    }
    // handleAudio(recordedBlob)
  }
 
  const onStop = (recordedBlob: any) => {
    // console.log('recordedBlob is: ', recordedBlob);
  }
 
    return (
      <div>
        {/* center the mic and round the corners */}
        <div className="flex justify-center items-center rounded-lg bg-black p-4 mt-10">
        <ReactMic
        
            record={record}         // defaults -> false.  Set to true to begin recording
            // pause={boolean}          // defaults -> false (available in React-Mic-Gold)
            visualSetting="sinewave"// defaults -> "sinewave".  Other option is "frequencyBars"
            className="sound-waves w-96"       // provide css class name
            onStop={onStop}        // required - called when audio stops recording
            onData={onData}        // optional - called when chunk of audio data is available
            // onBlock={function}       // optional - called if user selected "block" when prompted to allow microphone access (available in React-Mic-Gold)
            strokeColor="#FFF"   // sinewave or frequency bar color
            backgroundColor="#000"  // background color
            // mimeType={"audio/wav"}     // defaults -> "audio/webm".  Set to "audio/wav" for WAV or "audio/mp3" for MP3 audio format (available in React-Mic-Gold)
            // echoCancellation={boolean} // defaults -> false
            // autoGainControl={boolean}  // defaults -> false
            // noiseSuppression={boolean} // defaults -> false
            // channelCount={number}     // defaults -> 2 (stereo).  Specify 1 for mono.
            // bitRate={256000}          // defaults -> 128000 (128kbps).  React-Mic-Gold only.
            // sampleRate={96000}        // defaults -> 44100 (44.1 kHz).  It accepts values only in range: 22050 to 96000 (available in React-Mic-Gold)
            // timeSlice={100}          // defaults -> 4000 milliseconds.  The interval at which captured audio is returned to onData callback (available in React-Mic-Gold).
           />
        </div>

        {/* center buttons and add margin and add gap between buttons*/}
        <div className="flex items-center gap-x-4 my-4">
          <button
          type="button"
          onClick={startRecording}
          className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Start Recording
          <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </button>
        
        <button
          type="button"
          onClick={stopRecording}
          className="rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"

        >
          Stop Recording
          {/* <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" /> */}
        </button>
        </div>
      </div>
    );
}

export default Recorder;

// import React from 'react'
// // @ts-ignore
// import { Recorder } from 'react-voice-recorder'
// import 'react-voice-recorder/dist/index.css'

// class Recorder2 extends React.Component {
//   constructor(props:any) {
//     super(props);
//     this.state = {
//       audioDetails: {
//         url: null,
//         blob: null,
//         chunks: null,
//         duration: {
//           h: 0,
//           m: 0,
//           s: 0
//         }
//       }
//     }
//   }

//   handleAudioStop(data: any) {
//     console.log(data)
//     this.setState({ audioDetails: data });
//     this.handleReset();
//   }
//   handleAudioUpload(file: any) {
//     console.log(file);
//   }
//   handleReset() {
//     const reset = {
//       url: null,
//       blob: null,
//       chunks: null,
//       duration: {
//         h: 0,
//         m: 0,
//         s: 0
//       }
//     };
//     this.setState({ audioDetails: reset });
//   }
//   render() {
//     return (
//       <Recorder
//         record={true}
//         title={"New recording"}
//         // @ts-ignore
//         audioURL={this.state.audioDetails.url}
//         showUIAudio
//         // @ts-ignore
//         handleAudioStop={data => this.handleAudioStop(data)}
//         // @ts-ignore
//         handleAudioUpload={data => this.handleAudioUpload(data)}
//         handleReset={() => this.handleReset()}
//         mimeTypeToUseWhenRecording={`audio/webm`}
//       />
//     )
//   }
// }

// export default Recorder2






// import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
// import { CheckCircleIcon } from '@heroicons/react/20/solid'
// import { useState } from 'react';


// export default function Recorder({handleAudio, recordingBool}: any) {

//   // const [isRecording,setIsRecording] = useState(false);

//   // new idea:
//   // since started recording, set timer to 2s then stop recording, send data then start recording again

//   const recorderControls = useAudioRecorder()
//   // const onRecordingComplete = (blob: any) => {
//   //   console.log("blob", blob)
//   // }

//   const processAudio = (blob: any) => {
//     // const url = URL.createObjectURL(blob);
//     // const audio = document.createElement("audio");
//     // audio.src = url;
//     // audio.controls = true;
//     // document.body.appendChild(audio);
//     console.log("blob", blob)
//     var reader = new FileReader();
//     reader.readAsDataURL(blob); 
//     reader.onloadend = function() {
//       var base64data = reader.result;                
//       handleAudio(base64data)
//       // start recording again
//       startRecording();
      
//     }




//   };



//   const startRecording = () => {
//     recorderControls.startRecording();
//     recordingBool(true)
//     setTimeout(() => {
//       console.log("stop recording")
//       stopRecording();
//     }, 5000);
      
//   }


//   const stopRecording = () => {
//     recorderControls.stopRecording();
//     recordingBool(false)
//   }




//   return (
//     <div>

      
//       <AudioRecorder 
//         onRecordingComplete={(blob) => processAudio(blob)}
//         recorderControls={recorderControls}
//       />
//       {/* <button
//         type="button"
//         onClick={recorderControls.sendRecording}
//         className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//       >
//         Send recording
//         <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
//       </button> */}
//       <button
//         type="button"
//         onClick={startRecording}
//         className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//       >
//         Start recording
//         <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
//       </button>
//       <button
//         type="button"
//         onClick={stopRecording}
//         className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//       >
//         Stop recording
//         <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
//       </button>
      
 
//     </div>
//   )
// }

