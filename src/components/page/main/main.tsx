"use client";

import "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const MainPage = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <main className="w-full min-h-screen flex items-center justify-center flex-col gap-4">
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button
        onClick={() =>
          SpeechRecognition.startListening({
            continuous: true,
          })
        }
      >
        Start
      </button>
      <button onClick={() => SpeechRecognition.stopListening()}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </main>
  );
};
