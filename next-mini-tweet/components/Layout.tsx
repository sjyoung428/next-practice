import React from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full px-8">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
