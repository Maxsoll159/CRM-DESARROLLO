import React from 'react'
import AppContenxt from '@/context/AppContenxt';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-svg-core/styles.css';

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
        <Head></Head>
        <body className='flex my-container'>
          <AppContenxt>{children}</AppContenxt>
        </body>
      </html>
    );
  }
