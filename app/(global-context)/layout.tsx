import React from 'react'
import AppContenxt from '@/context/AppContenxt';
import '@fortawesome/fontawesome-svg-core/styles.css'

import '../../styles/globals.css'
import Head from './Head';


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className="bg-bg">
        <Head></Head>
        <body>
          <AppContenxt>{children}</AppContenxt>
        </body>
      </html>
    );
  }
