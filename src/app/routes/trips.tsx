import { MetaFunction } from "@remix-run/react";
import { Article } from "src/components/layout";
import { Trips as page } from "src/lib/pages";

export const meta: MetaFunction = () => [
  { title: page.label }
]

export default function Trips() {
  return (
    <Article>
      
    </Article>
  );
}
