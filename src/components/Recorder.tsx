// https://www.npmjs.com/package/webm-to-wav-converter

// @ts-ignore
import { ReactMic } from 'react-mic';
import React, { useState, useRef } from 'react';
import AudioRecorder from './AudioRecorder';
import { CheckCircleIcon } from '@heroicons/react/20/solid'


 
export const Recorder = ({record, handleAudio, onStartRec, onStopRec, onBreak}: any) => {

  const handleStart = () => { 
    onStartRec();
  }

  const handleStop = () => {
    
    onStopRec();
  }
  // const audioContext = new AudioContext();
  const reader = new FileReader();

  const onData = async (recordedBlob: any) => {
    console.log('chunk of real-time data is: ', recordedBlob);
    
    // console.log("recorded blob: ", recordedBlob);
    reader.readAsDataURL(recordedBlob); 
    reader.onloadend = function() {
      var base64data = reader.result;     
      handleAudio(base64data)
    }
    // reader.readAsArrayBuffer(recordedBlob)          
      
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

//   function download(blob: any){
//     const url = window.URL.createObjectURL(blob)
//     const anchor = document.createElement('a')
//     anchor.href = url
//     anchor.download = 'audio.wav'
//     anchor.click()
// }




 // handlestop: clear interval + stop
  const onStop = (audioUrl: string) => {
    onBreak();
  }
 
    return (
      <div>
        {/* center the mic and round the corners */}
        <div className="flex justify-center items-center rounded-lg bg-violet-100 p-4 mt-10">
        <AudioRecorder
          onStart={handleStart}
          onData={onData}
          onAudio={handleStop}
        />
       </div>
      </div>
    );
}

export default Recorder;
