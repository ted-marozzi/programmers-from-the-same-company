import { JSXElement } from "solid-js";

export function Layout({ children }: { children: JSXElement }) {
  return <div class="max-w-screen-2xl w-full h-full m-auto">{children}</div>;
}
