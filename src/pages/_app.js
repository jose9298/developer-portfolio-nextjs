import Head from 'next/head';
import React from 'react';
import ThemeContextProvider from '../contexts/theme-context';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <Head>
        <title>José Souza | Portfólio</title>
        <meta name='description' content='Portfólio de José Souza, estudante de Ciência da Computação e desenvolvedor em formação com foco em Python e SQL.' />
      </Head>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
};

export default App;