"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const inter = Inter({ subsets: ["latin"] });

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
