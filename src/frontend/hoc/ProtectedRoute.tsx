"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/client-side/utils/token";

const ProtectedRoute = (Component: React.FC) => {
  const AuthWrapper = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      // If no token, redirect to login
      if (!isAuthenticated()) router.push("/login")
    }, [router]);

    // Render the component only if token exists
    return isAuthenticated() ? <Component {...props} /> : null;
  };

  return AuthWrapper;
};

export default ProtectedRoute;
