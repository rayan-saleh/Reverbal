import { useState, useRef, MutableRefObject, ReactNode, FC } from "react";
import RecordRTC from 'recordrtc';

const MIME_TYPE = "audio/wav";

interface AudioRecorderProps {
    onStart: () => void
    onData: (e: Blob) => {}
    onAudio: (e: string) => void
    children?: ReactNode
}

const AudioRecorder: FC<AudioRecorderProps> = ({ onStart, onData, onAudio, children }) => {
	const [permission, setPermission] = useState(false);

	const mediaRecorder: MutableRefObject<RecordRTC | null> = useRef(null);

	const [recordingStatus, setRecordingStatus] = useState("inactive");

	const stream: MutableRefObject<MediaStream | null> = useRef(null);

    const [audioChunks, setAudioChunks] = useState<Blob[]>([]);

	const [audio, setAudio] = useState<string>("");

	const getMicrophonePermission = async () => {
		if ("MediaRecorder" in window) {
			try {
				const mediaStream: MediaStream = await navigator.mediaDevices.getUserMedia({
					audio: true,
					video: false,
				});
				setPermission(true);
				stream.current = mediaStream;
			} catch (err: any) {
				alert(err.message);
			}
		} else {
			alert("The MediaRecorder API is not supported in your browser.");
		}
	};

	const startRecording = async () => {
		setRecordingStatus("recording");
        let localAudioChunks: Blob[] = [];
        if (stream.current != null) {
            const media = new RecordRTC(stream.current, {
                mimeType: 'audio/webm',
                recorderType: RecordRTC.StereoAudioRecorder,
                numberOfAudioChannels: 2,
                timeSlice: 5000,
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
        onAudio
	};

	return (
		<div>
			<h2>Audio Recorder</h2>
			<main>
				<div className="audio-controls">
					{!permission ? (
						<button onClick={getMicrophonePermission} type="button">
							Get Microphone
						</button>
					) : null}
					{permission && recordingStatus === "inactive" ? (
						<button 
                        className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={startRecording} 
                        type="button"
                        >
							{recordingStatus === "inactive" ? "Start Recording" : "Recording..."}
						</button>
					) : null}
					{recordingStatus === "recording" ? (
						<button 
                        className="rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        onClick={stopRecording} 
                        type="button"
                        >
							Stop Recording
						</button>
					) : null}
                    {children}
				</div>
				{audio ? (
					<div className="audio-player">
						<audio src={audio} controls></audio>
						<a download href={audio}>
							Download Recording
						</a>
					</div>
				) : null}
			</main>
		</div>
	);
};

export default AudioRecorder;