import { Settings } from "lucide-react";

export default function SettingsPanel() {
  return (
    <div className="h-full md:border-l">
      <div className="h-10 w-full border-b hidden md:flex flex-row gap-4 items-center p-4">
        <Settings size={16} /> <span className="text-sm">Settings</span>
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <span className="text-muted-foreground text-xs">
          Voice settings will appear here
        </span>
      </div>
    </div>
  );
}
