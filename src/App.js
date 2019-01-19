import React from 'react';
import { Root, Head, Routes, withSiteData } from 'react-static';

import Header from './components/header';
import Footer from './components/footer';
import './app.css';

const App = ({ siteTitle, header }) => (
  <Root>
    <Head>
      <meta charSet="UTF-8"/>
      <meta name="viewport"
            content="width=device-width"
      />
      <meta
        httpEquiv="X-UA-Compatible"
        content="ie=edge"
      />
      <script
        defer src="https://use.fontawesome.com/releases/v5.6.3/js/all.js"
        integrity="sha384-EIHISlAOj4zgYieurP0SdoiBYfGJKkgWedPHH4jCzpCXLmzVsw1ouK59MuUtP4a1"
        crossOrigin="anonymous"/>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i|Roboto+Slab"
        rel="stylesheet"/>
      <title>{siteTitle}</title>
    </Head>
    <Header {...header}/>
    <main>
      <Routes/>
    </main>
    <Footer/>
  </Root>
);

export default withSiteData(App);
