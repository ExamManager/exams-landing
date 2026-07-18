import "../styles/globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Toaster } from "@/components/ui/sonner"

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

// Check that PostHog is client-side (used to handle Next.js SSR)
if (
  typeof window !== "undefined" &&
  process.env.NEXT_PUBLIC_POSTHOG_KEY
) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    loaded: (client) => {
      if (process.env.NODE_ENV === "development") client.debug();
    },
  });
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog?.capture('$pageview')
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <PostHogProvider client={posthog}>
      <main className={`${inter.variable} font-sans`}>
        <Head>
          <link href="/static/favicon.ico" rel="icon" sizes="any" />
          <link href="/static/favicon.svg" rel="icon" type="image/svg+xml" />
          <link href="/static/apple-touch-icon.png" rel="apple-touch-icon" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta content="/static/cover.png" property="og:image" />
          <meta content="/static/cover.png" name="twitter:image" />
          <meta content="website" property="og:type" />
        </Head>
        <Component {...pageProps} />
        <Toaster />
        <Analytics />
      </main>
    </PostHogProvider>
  );
};

export default MyApp;
