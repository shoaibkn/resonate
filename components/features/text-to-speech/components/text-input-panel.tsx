"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Coins } from "lucide-react";
import { useState } from "react";

export default function TextInputPanel() {
  const [text, setText] = useState("");

  return (
    <div className="md:h-1/2 h-full flex flex-col gap-0 p-4 md:border-b">
      <div className="flex flex-col gap-0 justify-start overflow-auto h-full">
        <Textarea
          className="h-full border-transparent focus-visible:ring-0 focus-visible:border-transparent bg-transparent overflow-auto"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here"
          maxLength={5000}
        />

        <div className="pointer-events-none absolute bottom-0 h-24 bg-linear-to-t from-primary to-black"></div>
      </div>
      <div className="flex flex-row flex-wrap md:justify-between md:items-center gap-4">
        <div className="rounded-full border-dashed border-primary w-fit border px-2 py-1 flex flex-row gap-2 text-xs items-center">
          <Coins size={16} className="text-amber-400" />
          <span>
            {text.length === 0
              ? "Start typing to estimate cost"
              : `${(text.length * 0.0003).toFixed(4)} estimated cost`}
          </span>
        </div>
        <div className="flex flex-row gap-2 items-center justify-between w-full md:w-fit">
          <span className="text-xs text-muted-foreground">
            {text.length}/5000 characters used
          </span>
          <Button size="lg">Generate</Button>
        </div>
      </div>
    </div>
  );
}
