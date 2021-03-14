import Document, { Head, Html, Main, NextScript } from 'next/document';

class OverrideDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <Main />
              <NextScript />
            </div>
          </div>
        </body>
      </Html>
    );
  }
}

export default OverrideDocument;
