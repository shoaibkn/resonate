"use client";
import TextInputPanel from "../components/text-input-panel";
import VoicePreviewPlaceholder from "../components/voice-preview-placeholder";
import SettingsPanel from "../components/settings-panel";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TextToSpeechForm,
  type TTSFormValues,
} from "../components/text-to-speech-form";

import { useSuspenseQueries } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { TTSVoicesProvider } from "../contexts/tts-voices-context";

export default function TextToSpeechDetailView({
  generationId,
}: {
  generationId: string;
}) {
  const isMobile = useIsMobile();

  const trpc = useTRPC();

  const [generationQuery, voicesQuery] = useSuspenseQueries({
    queries: [
      trpc.generations.getById.queryOptions({ id: generationId }),
      trpc.voices.getAll.queryOptions(),
    ],
  });

  const data = generationQuery.data;
  const { custom: customVoices, system: systemVoices } = voicesQuery.data;

  const allVoices = [...customVoices, ...systemVoices];
  const fallbackVoiceId = allVoices[0]?.id ?? "";

  const resolvedVoiceId =
    data?.voiceId && allVoices.some((v) => v.id === data.voiceId)
      ? data.voiceId
      : fallbackVoiceId;

  const defaultValues: TTSFormValues = {
    text: data.text,
    voiceId: resolvedVoiceId,
    temperature: data.temperature,
    topP: data.topP,
    topK: data.topK,
    repetitionPenalty: data.repetitionPenalty,
  };

  if (isMobile) {
    return (
      <TTSVoicesProvider value={{ customVoices, systemVoices, allVoices }}>
        <TextToSpeechForm key={generationId} defaultValues={defaultValues}>
          <div className="overflow-hidden flex flex-col md:grid md:grid-cols-6 h-[calc(100dvh-46px)]">
            <div className="col-span-6 h-full">
              <TextInputPanel />
            </div>
            <div className="col-span-6 h-full w-full border">
              <Tabs defaultValue="voice" className="w-full h-full">
                <TabsList className="w-full rounded-none">
                  <TabsTrigger value="voice">Voice Preview</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="voice">
                  <VoicePreviewPlaceholder />
                </TabsContent>
                <TabsContent value="settings">
                  <SettingsPanel />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </TextToSpeechForm>
      </TTSVoicesProvider>
    );
  }

  return (
    <TTSVoicesProvider value={{ customVoices, systemVoices, allVoices }}>
      <TextToSpeechForm key={generationId} defaultValues={defaultValues}>
        <div className="overflow-hidden grid md:grid-cols-6 md:min-h-[calc(100dvh-46px)]">
          <div className="col-span-4 h-full">
            <TextInputPanel />
            <VoicePreviewPlaceholder />
          </div>
          <div className="col-span-2 h-full">
            <SettingsPanel />
          </div>
        </div>
      </TextToSpeechForm>
    </TTSVoicesProvider>
  );
}
