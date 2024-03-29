import Head from 'next/head'
import { Amplify } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from "../aws-exports";
import '../styles/globals.css'
import { AppProps } from 'next/app'

Amplify.configure({ ...awsExports, ssr: true });

export default function SGNMEvents({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Sri Guru Nanak Mission | Events</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Authenticator  hideSignUp={true}>
        {({ signOut }) => (
          <Component {...pageProps} signOut={signOut} />
        )}
      </Authenticator>
    </>
  )
}
