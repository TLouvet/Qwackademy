import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='fr' style={{ scrollBehavior: "smooth" }}>
      <Head />
      <body style={{ minHeight: "100vh" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
