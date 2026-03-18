import TextToSpeechView from "@/components/features/text-to-speech/views/text-to-speech-view";
import { Metadata } from "next";

import { trpc, HydrateClient, prefetch } from "@/trpc/server";

export const metadata: Metadata = {
  title: "Text To Speech",
};

export default async function TextToSpeechPage({
  searchParams,
}: {
  searchParams: Promise<{ text?: string; voiceId?: string }>;
}) {
  const { text, voiceId } = await searchParams;
  prefetch(trpc.voices.getAll.queryOptions());
  return (
    <HydrateClient>
      <div className="flex h-full min-h-0 flex-col overflow-hidden">
        <TextToSpeechView initialValues={{ text, voiceId }} />
      </div>
    </HydrateClient>
  );
}
