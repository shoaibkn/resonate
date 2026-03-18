import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { TRPCReactProvider } from "@/trpc/client";
import { TTSVoicesProvider } from "@/components/features/text-to-speech/contexts/tts-voices-context";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Resonate",
    template: "%s | Resonate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <TRPCReactProvider>
        {/*<TTSVoicesProvider value={}>*/}
        <html lang="en" className={outfit.variable}>
          <body
            className={`${outfit.variable} ${geistMono.variable} antialiased`}
          >
            <TooltipProvider>{children}</TooltipProvider>
            <Toaster />
          </body>
        </html>
        {/*</TTSVoicesProvider>*/}
      </TRPCReactProvider>
    </ClerkProvider>
  );
}
