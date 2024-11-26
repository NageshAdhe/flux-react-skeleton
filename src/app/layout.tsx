// app/layout.tsx
"use client";
import StyledJsxRegistry from "./registry";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/theme/fluxTheme";

import { useEffect, useState } from "react";
import EmptyLayout from "./components/layouts/empty";
import SiteLayout from "./components/layouts/site";
import DenseLayout from "./components/layouts/dense";
import ClassicLayout from "./components/layouts/classic";
import EnterPriseLayout from "./components/layouts/enterprise";
import { usePathname } from "next/navigation";
import { cookies } from "next/headers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [layout, setLayout] = useState<
    "empty" | "dense" | "classic" | "enterprise" | "site"
  >("site");

  const switchLayout = (
    layout: "empty" | "dense" | "classic" | "enterprise" | "site"
  ) => {
    setLayout(layout);
  };
  let AppLayoutComponent = EmptyLayout;
  switch (layout) {
    case "dense": {
      AppLayoutComponent = DenseLayout;
      break;
    }
    case "classic": {
      AppLayoutComponent = ClassicLayout;
      break;
    }
    case "enterprise": {
      AppLayoutComponent = EnterPriseLayout;
      break;
    }
    case "site": {
      AppLayoutComponent = SiteLayout;
      break;
    }
    default: {
      AppLayoutComponent = SiteLayout;
      break;
    }
  }
  const pathname = usePathname();
  const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        // Simulate fetching user role from an API
        async function fetchUserRole() {
            // const response = await fetch('/services/user-role');
            // const data = await response.json();
            setUserRole('admin'); // Example roles: 'admin', 'guest'
        }

        fetchUserRole();
    }, []);

    if (!userRole) {
        return <p>Loading...</p>; // Show loading state while fetching role
    }
    
    if (pathname.startsWith('/admin')) {
      if (userRole !== 'admin') {
          return <p>Access denied. Admins only.</p>;
      }
      AppLayoutComponent = ClassicLayout;
    }
    if (pathname.startsWith('/auth')) {  
      AppLayoutComponent = EmptyLayout;
    }

  
    // const userRole = cookies().get('user-role')?.value || 'guest';

    // if (userRole !== 'admin') {
    //     return <p>Access Denied. Admins only.</p>;
    // }

  // const LayoutComponent = layout === 'empty' ? EmptyLayout : DenseLayout;

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <StyledJsxRegistry>
        <body className="light" data-theme="rose">
          <AppRouterCacheProvider options={{ key: "css" }}>
            <ThemeProvider theme={theme}>
              <div className="app-root">
                <AppLayoutComponent>{children}</AppLayoutComponent>
              </div>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </StyledJsxRegistry>
    </html>
  );
}
