import { PropsWithChildren } from "react";
import Header from "./Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className="flex-1 container mx-auto">
        <main className="min-h-screen mt-[var(--header-height)] container max-w-7xl mx-auto px-0 md:px-4 mb-56">
          <div className="pt-4 flex flex-col">{children}</div>
        </main>
      </div>
    </>
  );
}
