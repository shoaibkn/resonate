"use client";

import * as React from "react";
import {
  AudioLines,
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Headphones,
  Home,
  LayoutGrid,
  Map,
  PieChart,
  Settings,
  Settings2,
  Speech,
  SquareTerminal,
  Volume2,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { NavOthers } from "./nav-others";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Skeleton } from "./ui/skeleton";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: true,
    },
    {
      title: "Explore Voices",
      url: "/explore-voices",
      icon: LayoutGrid,
    },
    {
      title: "Text to Speech",
      url: "/text-to-speech",
      icon: AudioLines,
    },
    {
      title: "Voice Cloning",
      url: "/voice-cloning",
      icon: Volume2,
    },
  ],
  otherItems: [
    {
      name: "Settings",
      url: "/settings",
      icon: Settings,
    },
    {
      name: "Help & Support",
      url: "/help-and-support",
      icon: Headphones,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarMenu className="p-2">
        <SidebarMenuItem>
          <OrganizationSwitcher
            hidePersonal
            fallback={
              <Skeleton className="h-8.5 w-full group-data-[collapsible=icon]:size-8 rounded-md border bg-white" />
            }
            appearance={{
              elements: {
                rootBox:
                  "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",
                organizationSwitcherTrigger:
                  "w-full! justify-between! bg-white! border! border-border! rounded-md! pl-1! pr-2! py-1! gap-3! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1! shadow-[0px_1px_1.5px_0px_rgba(44,54,53,0.03)]!",
                organizationPreview: "gap-2!",
                organizationPreviewAvatarBox: "size-6! rounded-sm!",
                organizationPreviewTextContainer:
                  "text-xs! tracking-tight! font-medium! text-foreground! group-data-[collapsible=icon]:hidden!",
                organizationPreviewMainIdentifier: "text-[13px]!",
                organizationSwitcherTriggerIcon:
                  "size-4! text-sidebar-foreground! group-data-[collapsible=icon]:hidden!",
              },
            }}
          />
        </SidebarMenuItem>
      </SidebarMenu>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavOthers projects={data.otherItems} />
      </SidebarContent>
      <SidebarFooter>
        <UserButton
          showName
          fallback={
            <Skeleton className="h-8.5 w-full group-data-[collapsible=icon]:size-8 rounded-md border border-border bg-white" />
          }
          appearance={{
            elements: {
              rootBox:
                "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",
              userButtonTrigger:
                "w-full! justify-between! bg-white! border! border-border! rounded-md! pl-1! pr-2! py-1! shadow-[0px_1px_1.5px_0px_rgba(44,54,53,0.03)]! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1! group-data-[collapsible=icon]:after:hidden! [--border:color-mix(in_srgb,transparent,var(--clerk-color-neutral,#000000)_15%)]!",
              userButtonBox: "flex-row-reverse! gap-2!",
              userButtonOuterIdentifier:
                "text-[13px]! tracking-tight! font-medium! text-foreground! pl-0! group-data-[collapsible=icon]:hidden!",
              userButtonAvatarBox: "size-6!",
            },
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
