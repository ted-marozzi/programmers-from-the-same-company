import { JSXElement } from "solid-js";

export function Layout({ children }: { children: JSXElement }) {
  return (
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="p-5 max-w-screen-2xl">
        {children}
        <Footer />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div class="w-full flex justify-center items-center">
      <a target="_blank" href="https://www.facebook.com/groups/companyfbgroup">
        Facebook Group
      </a>
    </div>
  );
}
