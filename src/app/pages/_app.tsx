// src/pages/_app.tsx
import { ReactNode } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { NextPage } from "next"; 

// declare module "next" {
//     interface NextPage {
//       getLayout?: (page: ReactNode) => ReactNode;
//     }
//   }

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
  
  const MyApp = ({ Component, pageProps }: AppProps) => {
    // Ensure `getLayout` is called if it exists, otherwise fallback to default layout
    const getLayout = (Component as NextPageWithLayout).getLayout || ((page) => page);
  
    return getLayout(<Component {...pageProps} />);
  };
  
  export default MyApp;