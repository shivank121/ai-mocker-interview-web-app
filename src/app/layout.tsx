"use client";

import React from "react";
import "../frontend/css/globals.css";

import AuthProvider from "@/frontend/context/AuthProvide";
import LayoutContainer from "@/frontend/containers/LayoutContainer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-primary-light text-primary-dark">
        <AuthProvider>
          <LayoutContainer>{children}</LayoutContainer>
        </AuthProvider>
      </body>
    </html>
  );
}
