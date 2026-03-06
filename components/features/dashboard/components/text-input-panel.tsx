"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TextInputPanel() {
  const [text, setText] = useState<string>("");
  const router = useRouter();

  const handleGenerate = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    router.push(`/text-to-speech?text=${encodeURIComponent(trimmed)}`);
  };

  return (
    <div>
      <Textarea value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={() => handleGenerate()}>Generate</Button>
    </div>
  );
}
