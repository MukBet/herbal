import React from 'react';
import { Helmet } from 'react-helmet';
import { LanguageProvider } from './src/context/languageContext';

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {element}
    </>
  </LanguageProvider>
);
