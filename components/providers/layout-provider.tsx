import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Headphones, ThumbsUp } from "lucide-react";
import NavHeader from "../nav-header";

export default function LayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <NavHeader />
        <main className="">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
