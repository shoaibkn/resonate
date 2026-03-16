import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Coins } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TextInputPanel() {
  const [text, setText] = useState<string>("");
  return (
    <div>
      <div className="border p-4 rounded-lg flex flex-col gap-2">
        <Textarea
          className="bg-transparent border-primary/10 h-64"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex flex-row justify-between flex-wrap items-center">
          <div className="rounded-full border-dashed border-primary w-fit border px-2 py-1 flex flex-row gap-2 text-xs items-center">
            <Coins size={16} className="text-amber-400" />
            <span>
              {text.length === 0
                ? "Start typing to estimate cost"
                : `${(text.length * 0.0003).toFixed(4)} estimated cost`}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            {text.length}/500 characters used
          </span>
        </div>
        <Button className="md:w-fit mt-2" size="lg" asChild>
          <Link href={`/text-to-speech?`}>Generate</Link>
        </Button>
      </div>
    </div>
  );
}
