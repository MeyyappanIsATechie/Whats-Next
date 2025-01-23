import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p className="text-3xl">Navbar</p>
      {children}
    </div>
  );
};

export default Layout;
