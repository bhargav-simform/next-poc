import React, { Suspense } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import './globals.css';
import '@ant-design/v5-patch-for-react-19';
import { AntdRegistry as AntdRegistryofficial } from '@ant-design/nextjs-registry';
import AntdRegistry from './components/AntdRegistry';
import type { Metadata } from 'next';
import ErrorBoundary from './context/ErrorBoundary';
import ClientProviders from './components/ClientProviders';
import { ServerLoadingVariants } from './components/ServerLoadingFallback';
import StyledComponentsRegistry from './components/StyledComponentRegistry';

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
          <StyledComponentsRegistry>
            <AntdRegistryofficial>
              <AntdRegistry>
                <ClientProviders>
                  <Suspense fallback={<ServerLoadingVariants.FullPage />}>
                    <Toaster position='top-right' />
                    {children}
                  </Suspense>
                </ClientProviders>
              </AntdRegistry>
            </AntdRegistryofficial>
          </StyledComponentsRegistry>
        </ErrorBoundary>
      </body>
    </html>
  );
}
