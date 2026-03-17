"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTypedAppFormContext } from "@/hooks/use-app-form";
import { Coins } from "lucide-react";
import { ttsFormOptions } from "./text-to-speech-form";
import { useStore } from "@tanstack/react-form";
import { GenerateButton } from "./generate-button";

export default function TextInputPanel() {
  const form = useTypedAppFormContext(ttsFormOptions);
  const text = useStore(form.store, (s) => s.values.text);
  const isSubmitting = useStore(form.store, (s) => s.isSubmitting);
  const isValid = useStore(form.store, (s) => s.isValid);
  return (
    <div className="md:h-1/2 h-full flex flex-col gap-0 p-4 md:border-b">
      <div className="flex flex-col gap-0 justify-start overflow-auto h-full">
        <form.Field name="text">
          {(field) => (
            <Textarea
              className="h-full border-transparent focus-visible:ring-0 focus-visible:border-transparent bg-transparent overflow-auto"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Start typing or paste your text here"
              maxLength={5000}
              disabled={isSubmitting}
            />
          )}
        </form.Field>

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
          <GenerateButton
            size="default"
            isSubmitting={isSubmitting}
            onSubmitAction={() => form.handleSubmit()}
            disabled={isSubmitting || !isValid}
          ></GenerateButton>
        </div>
      </div>
    </div>
  );
}
