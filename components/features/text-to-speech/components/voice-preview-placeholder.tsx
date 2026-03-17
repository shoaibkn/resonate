import { Button } from "@/components/ui/button";
import {
  AudioLines,
  BookOpen,
  Sparkle,
  Sparkles,
  Speaker,
  Volume2,
} from "lucide-react";

export default function VoicePreviewPlaceholder() {
  //When No preview
  return (
    <div className="md:h-1/2 h-full flex flex-col items-center align-middle justify-center gap-6">
      <div className="flex flex-row">
        <span className="bg-secondary relative left-4 rounded-full h-12 w-12 flex flex-row justify-between items-center">
          <Volume2
            className="mx-auto -rotate-30 text-muted-foreground"
            size={20}
          />
        </span>
        <span className="bg-primary rounded-full h-12 w-12 flex flex-row z-1 justify-between items-center">
          <Sparkles className="mx-auto text-primary-foreground" size={20} />
        </span>
        <span className="bg-secondary rounded-full relative right-4 h-12 w-12  flex flex-row justify-between items-center">
          <AudioLines
            className="mx-auto rotate-30 text-muted-foreground"
            size={20}
          />
        </span>
      </div>
      <div className="text-center flex flex-col gap-2">
        <h3>Preview will appear here</h3>
        <p className="text-muted-foreground text-xs w-64 wrap-break-word mx-auto">
          Once you generate, your audio result will appear here. Sit back and
          relax.
        </p>
      </div>
      <Button className="flex flex-row gap-2" variant="outline">
        <BookOpen /> Don&apos;t know how?
      </Button>
    </div>
  );
}
