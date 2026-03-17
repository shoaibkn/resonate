"use client";

import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";

export function GenerateButton({
  size,
  disabled,
  isSubmitting,
  onSubmitAction,
  className,
}: {
  size: "default" | "sm";
  disabled?: boolean;
  isSubmitting: boolean;
  onSubmitAction?: () => void;
  className?: string;
}) {
  return (
    <Button
      size={size}
      disabled={disabled}
      onClick={onSubmitAction}
      className={className}
    >
      {isSubmitting ? (
        <>
          <LoaderCircle className="animate-spin size-3" /> Generating...
        </>
      ) : (
        "Generate Speech"
      )}
    </Button>
  );
}
