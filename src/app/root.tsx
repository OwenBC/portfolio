import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import { FaviconSetter } from "src/components/common/FaviconSetter";
import { LeftPanel } from "src/components/layout";

import appStylesHref from "./app.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
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
        <FaviconSetter lightPath="/black_ram.ico" darkPath="/white_ram.ico" />
        <LeftPanel>
          <Outlet />
        </LeftPanel>

        <Scripts />
      </body>
    </html>
  );
}
