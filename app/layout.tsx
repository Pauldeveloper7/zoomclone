import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import 'react-datepicker/dist/react-datepicker.css'
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });
import '@stream-io/video-react-sdk/dist/css/styles.css';
export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
       <ClerkProvider
       appearance={{
          layout:{
            logoImageUrl:'/icons/yoom-logo.svg',
            socialButtonsVariant:'iconButton',
          },
          variables:{
            colorText:'#fff',
            colorPrimary:'#0E78F9',
            colorBackground:'#1c1f2e',
            colorInputBackground:'#252a41',
            colorInputText:'#fff'
          }
       }}
       >
        <body className={`${inter.className} bg-dark-2`}>
          {children}
          <Toaster />
        </body>
       </ClerkProvider>
      
    </html>
  );
}
