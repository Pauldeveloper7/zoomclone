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
  title: "FaceToFace",
  description: "Video calling App",
  icons: {
    icon: "/icons/facetoface.png",
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
            logoImageUrl:'/icons/FaceToFace-logo.svg',
            socialButtonsVariant:'iconButton',
          },
          variables:{
            colorText:'#ffff',
            colorPrimary:'#0E78F9',
            colorBackground:'#0e1117',
            colorInputBackground:'#343438',
            colorInputText:'#ffff'
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
