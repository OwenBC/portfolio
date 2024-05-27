import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import { FaviconSetter } from "src/components/common/FaviconSetter";
import { Main } from "src/components/layout";

import appStylesHref from "./app.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
  // {
  //   rel: "icon",
  //   href: window.matchMedia("(prefers-color-scheme: dark)").matches ? "/white_ram.ico" : "/black_ram.ico",
  //   type: "image/ico",
  // },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Main>
          <Outlet />
          <FaviconSetter lightPath="/black_ram.ico" darkPath="/white_ram.ico" />
        </Main>

        <Scripts />
      </body>
    </html>
  );
}
