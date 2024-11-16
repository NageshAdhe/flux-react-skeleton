// app/layout.tsx
"use client";
import StyledJsxRegistry from './registry'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './core/Theme/fluxTheme';

import { useState } from 'react';
import EmptyLayout from './components/layouts/empty';
import DenseLayout from './components/layouts/dense';
import ClassicLayout from './components/layouts/classic';
import EnterPriseLayout from './components/layouts/enterprise';
// import '../app/assets/styles/layout.scss';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [layout, setLayout] = useState<'empty' | 'dense' | 'classic' | 'enterprise'>('empty');

  const switchLayout = (layout: 'empty' | 'dense' | 'classic' | 'enterprise') => {
    setLayout(layout);
  };
let LayoutComponent = EmptyLayout;
  switch(layout){
    case 'dense':{
      LayoutComponent = DenseLayout;
      break;
    }
    case 'classic':{
      LayoutComponent = ClassicLayout;
      break;
    }
    case 'enterprise':{
      LayoutComponent = EnterPriseLayout;
      break;
    }
    default: { 
      LayoutComponent = ClassicLayout;
      break;
   } 
  }
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
      <body className='light'>
              {/* <button onClick={() => switchLayout('empty')}>empty Layout</button>
              <button onClick={() => switchLayout('dense')}>dense Layout</button>
              <button onClick={() => switchLayout('classic')}>clssic Layout</button>
              <button onClick={() => switchLayout('enterprise')}>enterprise Layout</button>      */}
              <AppRouterCacheProvider options={{ key: 'css' }}>
                <ThemeProvider theme={theme}>
                  {/* <div className='splash-screen'></div> */}
                  <div className='app-root'>  
                    {/* <div className="layout">                   */}
                    <LayoutComponent>{children}</LayoutComponent>
                    {/* </div>             */}
                  </div>            
                </ThemeProvider>
                </AppRouterCacheProvider>
      </body>
      </StyledJsxRegistry>
     
    </html>
  );
}
