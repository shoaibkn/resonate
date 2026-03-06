"use client";
import TextInputPanel from "@/components/features/dashboard/components/text-input-panel";
import { useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { isLoaded, user } = useUser();
  return (
    <div>
      <div>
        <TextInputPanel />
      </div>
    </div>
  );
}
