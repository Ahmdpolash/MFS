import * as React from "react";
import { LayoutDashboard, User, UserRoundCog, Users } from "lucide-react";

import { NavMain } from "@/components/nav-main";

import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "react-router";

// This is sample data.
export const items = [
  {
    title: "Dashboard Overview",
    url: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "User Management",
    url: "",
    icon: Users,
    isActive: true,
    items: [
      {
        title: "User List",
        url: "/dashboard/users",
      },
      {
        title: "User Transactions",
        url: "/dashboard/user-transactions",
      },
    ],
  },
  {
    title: "Agent Management",
    url: "",
    icon: UserRoundCog,
    isActive: true,
    items: [
      {
        title: "All Agents",
        url: "/dashboard/all-agents",
      },
      {
        title: "Request Agents",
        url: "/dashboard/request-agents",
      },
      {
        title: "Agent Transactions",
        url: "/dashboard/agent-transactions",
      },
    ],
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: User,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="" {...props}>
      <SidebarHeader>
        <SidebarMenuButton size="lg" asChild>
          <Link className="border-b border-gray-500/50 pb-2" to={"/dashboard"}>
            <span className="font-medium text-2xl text-center m-auto">
              MoneyMate
            </span>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={items} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: "Admin",
            email: "test@example.com",
            // name: user?.name || "Admin",
            // email: user?.email || "admin@gmail.com",
            avatar: "string",
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
