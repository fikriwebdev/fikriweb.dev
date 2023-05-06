import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto">
        <div className="min-h-screen mt-[var(--header-height)] container max-w-7xl mx-auto px-0 md:px-4">
          <div className="pt-8 flex flex-col">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
