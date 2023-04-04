import { PropsWithChildren } from "react";
import Header from "./Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="container mx-auto my-4">{children}</main>
    </>
  );
}
