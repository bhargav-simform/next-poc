import React, { Suspense } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import '@ant-design/v5-patch-for-react-19';
import AntdRegistry from './components/AntdRegistry';
import type { Metadata } from 'next';
import ErrorBoundary from './context/ErrorBoundary';
import ClientProviders from './components/ClientProviders';
import { ServerLoadingVariants } from './components/ServerLoadingFallback';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Issue Tracker - Next.js App',
  description: 'A modern issue tracking application built with Next.js',
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ErrorBoundary>
          <AntdRegistry>
            <ClientProviders>
              <Suspense fallback={<ServerLoadingVariants.FullPage />}>
                {children}
              </Suspense>
            </ClientProviders>
          </AntdRegistry>
        </ErrorBoundary>
      </body>
    </html>
  );
}
