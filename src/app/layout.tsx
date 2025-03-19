import { AntdRegistry } from "@ant-design/nextjs-registry";
import Layout from "./components/layout";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Boss</title>
      </head>
      <body>
        <AntdRegistry>
          <Layout>{children}</Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
