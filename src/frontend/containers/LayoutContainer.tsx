import React from "react";
import { usePathname } from "next/navigation";

import AppSidebar  from "@/frontend/components/layout/AppSidebar";
import { SidebarProvider, SidebarInset } from "../components/ui/sidebar";
import Header from "../components/layout/Header";

interface Props {
  children: React.ReactNode;
}

const LayoutContainer: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <React.Fragment>
      
      {isAuthPage && <>{children}</>}

      {!isAuthPage && (
        <div className="flex">
          <SidebarProvider>
            <AppSidebar pathname={pathname} />

            <SidebarInset>
              <Header />
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                {children}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      )}
    </React.Fragment>
  );
};

export default LayoutContainer;
