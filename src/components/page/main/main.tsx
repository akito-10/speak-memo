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
    <main className="w-full flex-1 min-h-screen flex items-center justify-center flex-col bg-gray-100">
      <h1 className="text-3xl mb-2 text-blue-500">マイク</h1>
      <div className="flex items-center space-x-2 mb-8">
        <Switch id="mic-switch" onCheckedChange={onClickSwitch} />
        <Label htmlFor="mic-switch" className="text-lg">
          {listening ? "オン" : "オフ"}
        </Label>
      </div>
      <Card className="max-w-full w-96 my-4 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-blue-500">
            出力
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{transcript}</p>
        </CardContent>
      </Card>
      <Button
        variant="outline"
        className="py-2 px-4 text-lg bg-blue-500 text-white"
        onClick={resetTranscript}
      >
        リセット
      </Button>
    </main>
  );
};
