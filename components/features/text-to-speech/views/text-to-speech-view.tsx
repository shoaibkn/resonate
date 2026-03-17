"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Coins } from "lucide-react";
import { useState } from "react";
import TextInputPanel from "../components/text-input-panel";
import VoicePreviewPlaceholder from "../components/voice-preview-placeholder";
import SettingsPanel from "../components/settings-panel";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TextToSpeechView() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
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
    );
  }

  return (
    <div className="overflow-hidden grid md:grid-cols-6 md:min-h-[calc(100dvh-46px)]">
      <div className="col-span-4 h-full">
        <TextInputPanel />
        <VoicePreviewPlaceholder />
      </div>
      <div className="col-span-2 h-full">
        <SettingsPanel />
      </div>
    </div>
  );
}
