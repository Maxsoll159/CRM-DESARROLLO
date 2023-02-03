import React from 'react'
import AppContenxt from '@/context/AppContenxt';
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '../../styles/globals.css'
import Head from './head';

export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) 
  {
    
    return (
      <html lang="en" className="bg-bg">
        <Head/>
        <body>
          <AppContenxt>{children}</AppContenxt>
        </body>
      </html>
    );
  }
