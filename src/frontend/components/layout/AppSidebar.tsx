import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

import {
  HomeIcon,
  GearIcon,
  DashboardIcon,
  QuestionMarkIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: DashboardIcon,
  },
  {
    title: "Interview",
    url: "/interview",
    icon: DashboardIcon,
  },
  {
    title: "Question",
    url: "/question",
    icon: QuestionMarkIcon,
  },
  {
    title: "Upgrade",
    url: "/upgrade",
    icon: UpdateIcon,
  },
  {
    title: "How it work ?",
    url: "/how-it-work",
    icon: HomeIcon,
  },
  {
    title: "Settings",
    url: "/setting",
    icon: GearIcon,
  },
];

interface Props {
  pathname: string;
}
import React from "react";

const AppSidebar: React.FC<Props> = (props) => {
  const { pathname } = props;

  return (
    <Sidebar>
      <div className="flex items-center gap-1 pt-2 pl-1 mb-5">
        <img src="assets/icons/register/logo.svg" width="50px" height="50px" />
        <b>AI-Powered Interviewer</b>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`${
                      pathname == item.url ? "text-primary font-bold" : ""
                    }
                      hover:text-primary hover:font-bold`}
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
