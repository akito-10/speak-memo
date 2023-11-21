"use client";

import "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Label } from "@/components/shadcn/ui/label";
import { Switch } from "@/components/shadcn/ui/switch";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";

export const MainPage = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <main>Browser does not support speech recognition.</main>;
  }

  const onClickSwitch = async () => {
    if (listening) {
      await SpeechRecognition.stopListening();
    } else {
      await SpeechRecognition.startListening({
        continuous: true,
      });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-200 p-4 w-full">
      <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2 w-full max-w-6xl">
        <h1 className="text-4xl text-blue-600 mb-10 text-center">マイク</h1>
        <div className="flex justify-center items-center space-x-4 mb-10">
          <Switch id="mic-switch" onCheckedChange={onClickSwitch} />
          <Label htmlFor="mic-switch" className="text-2xl">
            {listening ? "オン" : "オフ"}
          </Label>
        </div>
        <Card className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden m-3">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-blue-600">
              出力
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl text-gray-600">{transcript}</p>
          </CardContent>
        </Card>
        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            className="py-2 px-4 text-lg bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={resetTranscript}
          >
            リセット
          </Button>
        </div>
      </div>
    </main>
  );
};
