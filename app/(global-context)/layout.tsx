import React from 'react'
import AppContenxt from '@/context/AppContenxt';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-svg-core/styles.css';

import '../../styles/globals.css'
import "react-datepicker/dist/react-datepicker.css";
import Head from './head';

export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) 
  {
    return (
      <>
      <html lang="en" className="bg-myWhite">
        <Head></Head>
        <body className='flex my-container'>
          <AppContenxt>{children}</AppContenxt>
        </body>
      </html>
      </>
    );
  }
