"use client";
import { Button } from "@/components/ui/button";
import { History, Settings, SettingsIcon } from "lucide-react";
import { useState } from "react";
import { SettingsPanelSettings } from "./settings-panel-settings";
import { SettingsPanelHistory } from "./settings-panel-history";

export default function SettingsPanel() {
  const [activeOption, setActiveOption] = useState<"settings" | "history">(
    "settings",
  );
  return (
    <div className="h-full md:border-l">
      <div className="h-10 w-full border-b hidden md:flex flex-row gap-4 items-center p-4">
        <Settings size={16} /> <span className="text-sm">Settings</span>
      </div>

      {activeOption === "settings" && (
        <>
          <SettingsPanelSettings />
          {/*Settings*/}
          <Button
            onClick={() => setActiveOption("history")}
            variant={"secondary"}
            size={"lg"}
            className="absolute bottom-4 right-4 rounded-full"
          >
            <History /> Switch to History
          </Button>
        </>
      )}
      {activeOption === "history" && (
        <>
          <SettingsPanelHistory />
          {/*History*/}
          <Button
            onClick={() => setActiveOption("settings")}
            variant={"secondary"}
            size={"lg"}
            className="absolute bottom-4 right-4 rounded-full"
          >
            <SettingsIcon />
            Switch to Settings
          </Button>
        </>
      )}
    </div>
  );
}
