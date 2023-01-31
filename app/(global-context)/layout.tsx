import React from 'react'
import AppContenxt from '@/context/AppContenxt';
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '../../styles/globals.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className="bg-bg">
        <body>
          <AppContenxt>{children}</AppContenxt>
        </body>
      </html>
    );
  }
