import { useState, useRef } from "react";
import { MicrophoneIcon } from '@heroicons/react/20/solid'


const mimeType = "audio/webm";

const AudioRecorder = () => {
	const [permission, setPermission] = useState(false);

	const mediaRecorder = useRef(null);

	const [recordingStatus, setRecordingStatus] = useState("inactive");

	const [stream, setStream] = useState(null);

	const [audio, setAudio] = useState(null);

	const [audioChunks, setAudioChunks] = useState([]);

	const getMicrophonePermission = async () => {
		if ("MediaRecorder" in window) {
			try {
				const mediaStream: any = await navigator.mediaDevices.getUserMedia({
					audio: true,
					video: false,
				});
				setPermission(true);
				setStream(mediaStream);
			} catch (err: any) {
				alert(err.message);
			}
		} else {
			alert("The MediaRecorder API is not supported in your browser.");
		}
	};

	const startRecording = async () => {
		setRecordingStatus("recording");
		const media = new MediaRecorder(stream, { type: mimeType });

		mediaRecorder.current = media;

		mediaRecorder.current.start();

		let localAudioChunks: any = [];

		mediaRecorder.current.ondataavailable = (event) => {
			if (typeof event.data === "undefined") return;
			if (event.data.size === 0) return;
			localAudioChunks.push(event.data);
		};

		setAudioChunks(localAudioChunks);
	};

	const stopRecording = () => {
		setRecordingStatus("inactive");
		mediaRecorder.current.stop();

		mediaRecorder.current.onstop = () => {
			const audioBlob = new Blob(audioChunks, { type: mimeType });
			const audioUrl: any = URL.createObjectURL(audioBlob);

			setAudio(audioUrl);

			setAudioChunks([]);
		};
	};

	return (
		<div >
			{/* <h2>Audio Recorder</h2> */}
			<main>
				<div className="audio-controls flex justify-center my-3">
					{/* {!permission ? (
						// <button  type="button">
						// 	Get Microphone
						// </button>

						<button
						type="button" 
						className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
						<MicrophoneIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
						Get permission
						</button>
					) : null} */}
					{recordingStatus === "inactive" ? (

						<button
						type="button" onClick={() => { getMicrophonePermission(); startRecording();}}
						className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
						<MicrophoneIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
						Start recording
						</button>
						// <button  type="button">
						// 	Start Recording
						// </button>
					) : null}
					{recordingStatus === "recording" ? (
						<button onClick={stopRecording} type="button">
							Stop Recording
						</button>
					) : null}
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