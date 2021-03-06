import '../styles/main.css';

import App from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import React from 'react';

// import your default seo configuration
import SEO from '../next-seo.config.js';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    /* Die unterschiedlichen Referenzen zu den Favicons. */
    const favicon = {
      icon: 'https://stefankuehnel.com/favicon.ico',
      touch: 'https://assets-cdn.stefankuehnel.com/images/modules/site/favicon/touch-icon.png',
      x16: 'https://assets-cdn.stefankuehnel.com/images/modules/site/favicon/favicon-16x16.png',
      x32: 'https://assets-cdn.stefankuehnel.com/images/modules/site/favicon/favicon-32x32.png'
    };

    /* Die Referenz zur Mask Vektorgrafik inklusive zu verwendender Farbe. */
    const mask = {
      icon: 'https://assets-cdn.stefankuehnel.com/images/modules/site/favicon/mask-icon.svg',
      color: '#1e2530'
    };

    /* Die Referenz zum Web App Manifest */
    const manifest = 'https://assets-cdn.stefankuehnel.com/manifest/modules/site/site.webmanifest';

    return (
      <>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href={favicon.icon} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon.x32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon.x16} />
          <link rel="apple-touch-icon" sizes="180x180" href={favicon.touch} />
          <link rel="manifest" href={manifest} />
          <link rel="mask-icon" href={mask.icon} color={mask.color} />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </>
    );
  }
}
