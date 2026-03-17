import TextToSpeechView from "@/components/features/text-to-speech/views/text-to-speech-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text To Speech",
};

export default function TextToSpeechPage() {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <TextToSpeechView />
    </div>
  );
}
