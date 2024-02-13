'use client';

//import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
//import './globals.css';

import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apolloClient';
import { AuthProvider } from '@/hooks/useAuth';
import Header from '@/app/components/Header';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

/*
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ApolloProvider client={client}>
          <AuthProvider>
            <Header />
            <main>{children}</main>
          </AuthProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
