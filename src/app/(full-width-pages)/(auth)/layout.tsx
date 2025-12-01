// import GridShape from "@/components/common/GridShape";
import ThemeTogglerTwo from "@/components/common/ThemeTogglerTwo";

import { ThemeProvider } from "@/context/ThemeContext";
// import Image from "next/image";
// import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <ThemeProvider>
        <div className="relative flex lg:flex-row w-full h-screen justify-center flex-col dark:bg-gray-900 sm:p-0">
          <div className="lg:w-1/2 w-full flex items-center justify-center p-6">
            {children}
          </div>
          <div className="hidden lg:flex lg:w-1/2 h-full items-center justify-center relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/bit_door_8.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/20 dark:bg-black/10" />
            <div className="relative z-10 flex flex-col items-center max-w-xs text-white p-6">
              {/* <Link href="/signin" className="block mb-4">
                <Image
                  width={231}
                  height={48}
                  src="/images/bit_door_8.jpg"
                  alt="Logo"
                  className="rounded-full w-20 h-20"
                />
              </Link> */}
              <p className="text-center text-white/80">
                Free and Open-Source Tailwind CSS Admin Dashboard Template
              </p>
            </div>
          </div>
          <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
            <ThemeTogglerTwo />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
