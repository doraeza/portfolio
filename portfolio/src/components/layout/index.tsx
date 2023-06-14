import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return <div className="relative  top-10">{children}</div>;
}
