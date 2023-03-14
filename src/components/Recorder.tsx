// https://www.npmjs.com/package/webm-to-wav-converter

// @ts-ignore
import { ReactMic } from 'react-mic';
import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import toWav from 'audiobuffer-to-wav';
import {FFmpeg, createFFmpeg} from '@ffmpeg/ffmpeg';


 
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



  

  var reader = new FileReader(); 
  // const audioContext = new AudioContext();



  const onData = async (recordedBlob: any) => {
    // console.log('chunk of real-time data is: ', recordedBlob);
    
    // reader.readAsArrayBuffer(recordedBlob)           

   
    
    reader.readAsDataURL(recordedBlob); 
    reader.onloadend = function() {
      var base64data = reader.result;     
      handleAudio(base64data)
      
    }
    

    // async function convertWebmToMp3(recordedBlob: any) {
      // const ffmpeg: any = createFFmpeg({ log: false });
      // await ffmpeg.load();
    
      // const inputName = 'input.webm';
      // const outputName = 'output.mp3';
    
      // ffmpeg.FS('writeFile', inputName, await fetch(recordedBlob).then((res) => res.arrayBuffer()));
    
      // await ffmpeg.run('-i', inputName, outputName);
    
      // const outputData = ffmpeg.FS('readFile', outputName);
      // const outputBlob = new Blob([outputData.buffer], { type: 'audio/mp3' });
      // console.log(outputBlob)
    // }

    // convertWebmToMp3(recordedBlob);

    // The log true is optional, shows ffmpeg logs in the console
    // const ffmpeg = createFFmpeg({ log: true });

    // const transcode = async ({ target: { recordedBlob } }: any) => {
    //   const { name } = recordedBlob;
    //   console.log(recordedBlob)
    //   // This loads up the ffmpeg.wasm files from a CDN
    //   await ffmpeg.load();
    //   const arrayBuffer = await recordedBlob.arrayBuffer()
    //   const uint8Array = new Uint8Array(arrayBuffer);
    //   ffmpeg.FS("writeFile", name, uint8Array);
    //   await ffmpeg.run('-i', name, 'test.mpeg');
    //   const data = ffmpeg.FS('readFile', 'test.mpeg');
    //   console.log(data)
    //   const track: any = document.getElementById("track");
    //   track.src = URL.createObjectURL(new Blob([data.buffer], { type: 'audio/wav' }));
    // }
    
    // transcode(recordedBlob)

    // reader.onloadend = function(e: any){

    //   var arrayBuffer = e.target.result;
    //   // var bytes = new Uint8Array(arrayBuffer);
    //   console.log(arrayBuffer);
    //   audioContext.decodeAudioData(arrayBuffer).then((audioBuffer) => {
    //           let wav = toWav(audioBuffer)
    //           console.log(wav)
        
    //           let blob = new Blob([ new DataView(wav) ], {
    //               type: 'audio/wav'
                  
                  
    //             })
      
    //             console.log(blob)
    //             handleAudio(blob)
    //         });
    // }

  //   reader.onload = function(e: any){
  //     console.log(e.target.result)
  //     // let arrayBuffer: any = new ArrayBuffer(recordedBlob.size)
  //     let arrayBuffer = e.target.result;
  //     audioContext.decodeAudioData(arrayBuffer).then((audioBuffer) => {
  //       let wav = toWav(audioBuffer)
  
  //       let blob = new Blob([ new DataView(wav) ], {
  //           type: 'audio/wav'

            
  //         })

  //         console.log(blob)
  //         handleAudio(blob)
  //     });
      
      
  // }


    // audiobuffer-to-wav
  }

//   function download(blob: any){
//     const url = window.URL.createObjectURL(blob)
//     const anchor = document.createElement('a')
//     anchor.href = url
//     anchor.download = 'audio.wav'
//     anchor.click()
// }
 
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
            className="sound-waves w-11/12 "       // provide css class name
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
