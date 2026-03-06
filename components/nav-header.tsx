"use client";
import { Headphones, ThumbsUp } from "lucide-react";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function NavHeader() {
  const pathname = usePathname();
  const { isLoaded, user } = useUser();
  if (pathname === "/dashboard") {
    return (
      <header className="p-2 pt-12 flex flex-row justify-between">
        <div>
          <span className="text-sm text-muted-foreground">
            Nice to see you,
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight">
            {isLoaded ? (user?.fullName ?? user?.firstName ?? "there") : "..."}
          </h1>
        </div>
        <div className="flex flex-row gap-4">
          <Button variant={"outline"} size={"icon"} className="rounded-sm">
            <ThumbsUp />
          </Button>
          <Button variant={"outline"} size={"icon"} className="rounded-sm">
            <Headphones />
          </Button>
        </div>
      </header>
    );
  }
  return (
    <header className="flex h-fit py-2 shrink-0 px-4 justify-between items-center gap-2 transition-[width,height] ease-linear  border-b">
      <div className="flex items-center gap-2 flex-row align-middle">
        <SidebarTrigger className="-ml-1" size={"default"} />
        <span className="text-muted-foreground font-light ml-4">Dashboard</span>
      </div>
      <div className="flex flex-row gap-4">
        <Button variant={"outline"} size={"icon"} className="rounded-sm">
          <ThumbsUp />
        </Button>
        <Button variant={"outline"} size={"icon"} className="rounded-sm">
          <Headphones />
        </Button>
      </div>
    </header>
  );
}
