"use client";

import "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  return (
    <main className="w-full min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-xl mb-2">マイク</h1>
      <div className="flex items-center space-x-2 mb-8">
        <Switch
          id="airplane-mode"
          onCheckedChange={() => {
            if (listening) {
              SpeechRecognition.stopListening();
            } else {
              SpeechRecognition.startListening({
                continuous: true,
              });
            }
          }}
        />
        <Label htmlFor="airplane-mode">{listening ? "オン" : "オフ"}</Label>
      </div>
      <Card className="max-w-full w-96 my-4">
        <CardHeader>
          <CardTitle className="text-center">出力</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{transcript}</p>
        </CardContent>
      </Card>
      <Button variant="outline" onClick={resetTranscript}>
        リセット
      </Button>
    </main>
  );
};
