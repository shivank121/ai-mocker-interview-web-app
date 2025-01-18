"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import "../frontend/css/globals.css";

import AuthProvider from "@/frontend/context/AuthProvide";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  const pathname = usePathname(); // Get the current path dynamically
  const isAuthPage = pathname === "/login" || pathname === "/register"; // Check if on /login or /register page

  return (
    <html lang="en">
      <AuthProvider>
        <body className="bg-primary-light text-primary-dark">
          {isAuthPage ? (
            <main>{children}</main>
          ) : (
            <>
              <header>Header</header>
              <main>{children}</main>
              <footer>Footer</footer>
            </>
          )}
        </body>
      </AuthProvider>
    </html>
  );
}
