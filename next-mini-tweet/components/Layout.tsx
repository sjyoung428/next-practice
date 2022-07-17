import useUser from "@lib/hooks/useUser";
import React from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { data, status } = useUser();

  return (
    <div className="w-full px-8">
      <Navigation
        login={
          status === "authenticated"
            ? "yes"
            : status === "unauthenticated"
            ? "no"
            : undefined
        }
      />
      {children}
    </div>
  );
};

export default Layout;
