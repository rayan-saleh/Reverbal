import { useState, useRef, MutableRefObject, ReactNode, FC, useEffect } from "react";
import RecordRTC from 'recordrtc';
import React from "react";
import { MicrophoneIcon } from '@heroicons/react/20/solid'

const MIME_TYPE = "audio/wav";

interface AudioRecorderProps {
    onStart: () => void
    onData: (e: Blob) => {}
    onAudio: () => void
    children?: ReactNode
}

const AudioRecorder: FC<AudioRecorderProps> = ({ onStart, onData, onAudio, children }) => {
	const [permission, setPermission] = useState(false);

	const mediaRecorder: MutableRefObject<RecordRTC | null> = useRef(null);

	const [recordingStatus, setRecordingStatus] = useState("inactive");

	const stream: MutableRefObject<MediaStream | null> = useRef(null);

    const [audioChunks, setAudioChunks] = useState<Blob[]>([]);

	const [audio, setAudio] = useState<string>("");

    useEffect(() => {
        let isSubscribed = true;

        const getUserMedia = async () => {
            if ("MediaRecorder" in window) {
			try {
				const mediaStream: MediaStream = await navigator.mediaDevices.getUserMedia({
					audio: true,
					video: false,
				});
                console.log("User media permission granted. Ready to record.")
                if (isSubscribed) {
                    setPermission(true);
                    stream.current = mediaStream;
                }                  
			} catch (err: any) {
				alert(err.message);
			}
            } else {
                alert("The MediaRecorder API is not supported in your browser.");
            }
        }

        getUserMedia().catch(console.error);
        // cancel any future `setData`
        return () => { isSubscribed = false; }
    }, [])

	const startRecording = async () => {
        setAudio("");
		setRecordingStatus("recording");
        let localAudioChunks: Blob[] = [];
        if (stream.current != null) {
            const media = new RecordRTC(stream.current, {
                mimeType: 'audio/wav',
                recorderType: RecordRTC.StereoAudioRecorder,
                numberOfAudioChannels: 1,
                timeSlice: 100,
                type: 'audio',
                ondataavailable: (event: Blob) => {
                    if (typeof event === "undefined") return;
                    if (event.size === 0) return;
                    localAudioChunks.push(event);
                    onData(event);
                    setAudioChunks(localAudioChunks);
                },
                checkForInactiveTracks: true,
              });
            mediaRecorder.current = media;
            onStart();
            mediaRecorder.current.startRecording();
        }
		
		
	};

	const stopRecording = () => {
		setRecordingStatus("inactive");
        mediaRecorder.current?.stopRecording(() => {
            let blob = mediaRecorder.current?.getBlob();
            if (blob) {
                const audioUrl = URL.createObjectURL(blob);
                setAudio(audioUrl);
            }
        });
        onAudio();
	};

	return (
		<div className="flex flex-row gap-2">
				<div className="audio-controls">
					{permission && recordingStatus === "inactive" ? (
						<button 
                        className="inline-flex items-center grow gap-x-2 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={startRecording} 
                        type="button"
                        >
                            <MicrophoneIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
							{recordingStatus === "inactive" ? "Start Recording" : "Recording..."}
                            

						</button>
					) : null}
					{recordingStatus === "recording" ? (
						<button 
                        className="rounded-md bg-white py-2.5 grow px-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        onClick={stopRecording} 
                        type="button"
                        >
							Stop Recording
						</button>
					) : null}
                    {children}
				</div>
				{audio ? (
					<div className="audio-player rounded-md flex-none bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
						<a download href={audio}>
							Download Recording
						</a>
					</div>
				) : null}
		</div>
	);
};

export default AudioRecorder;