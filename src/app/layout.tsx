'use client';

import './globals.css';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>GlobalCrest</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

export default Layout;
