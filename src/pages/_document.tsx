import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Html, Head, NextScript, Main, DocumentContext } from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // Render app and page and get the context of the page with colleted side effects
    const sheets = new ServerStyleSheets();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => 
      originalRenderPage({
        enhanceApp: (App) => (props) => {
          return sheets.collect(<App {...props} />)
        },
      })

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps, 
      // Style fragment is rendered after app and page rendering finish
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ]  ,
    };
  }
  
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#000000" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;