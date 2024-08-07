import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import tailwindStylesUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesUrl as string },
];

export const loader = async () => {
  return json({
    ENV: {
      ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
      RESEND_API_KEY: process.env.RESEND_API_KEY,
    },
  });
};

export default function App() {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full flex flex-col bg-gradient-to-br from-pastel-yellow to-pastel-green">
        <Navigation />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
