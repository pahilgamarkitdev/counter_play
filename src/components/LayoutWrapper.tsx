"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  
  // Don't show sidebar on homepage
  const showSidebar = pathname !== "/";

  if (showSidebar) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-64">
          {children}
        </main>
      </div>
    );
  }

  // Homepage - no sidebar
  return (
    <main className="min-h-screen">
      {children}
    </main>
  );
}