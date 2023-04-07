import { PropsWithChildren } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className="flex-1 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 container mx-auto">
          <SideMenu />
          <main className="col-span-1 md:col-span-8 px-4 md:p-4">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
