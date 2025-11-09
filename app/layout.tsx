import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "DCRatfink",
  description: "DCRatfink, LLC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en">
      <head>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DCRatfink</title>
        <meta name="description" content="Multipurpose HTML template." />
        <link rel="stylesheet" href="/HTWF/scripts/bootstrap/css/bootstrap.css" />
        <link rel="stylesheet" href="/HTWF/style.css" />
        <link rel="stylesheet" href="/HTWF/css/content-box.css" />
        <link rel="stylesheet" href="/HTWF/css/image-box.css" />
        <link rel="stylesheet" href="/HTWF/css/animations.css" />
        <link rel="stylesheet" href="/HTWF/css/components.css" />
        <link rel="stylesheet" href="/HTWF/scripts/flexslider/flexslider.css" />
        <link rel="stylesheet" href="/HTWF/scripts/magnific-popup.css" />
        <link rel="stylesheet" href="/HTWF/scripts/php/contact-form.css" />
        <link rel="stylesheet" href="/HTWF/scripts/social.stream.css" />
        <link rel="stylesheet" href="/HTWF/css/skin.css" />
        <link rel="icon" href="../images/favicon.png" />
      </head>
      <body data-spy="scroll" data-target="#menu" data-offset="250">
        {children}
      </body>
    </html>
  );
}
