import React from "react";

function CommonLayout({ children }: { children: React.ReactNode }) {
  return <section className="flex flex-1 h-full">{children}</section>;
}

export default CommonLayout;
