import {
  ScrollArea,
  ScrollAreaScrollBar,
  ScrollAreaThumb,
  ScrollAreaViewPort,
} from "@/components/ScrollArea";

// const COMPONENTS = [
//   {
//     name: "accordion",
//     route: "/docs/accordion",
//     isNew: false,
//   },
//   {
//     name: "Alert",
//     route: "/docs/alert",
//     isNew: true,
//   },
//   {
//     name: "Alert Dialog",
//     route: "/docs/alert-dialog",
//     isNew: true,
//   },
//   {
//     name: "Aspect Ratio",
//     route: "/docs/aspect-ratio",
//     isNew: false,
//   },
//   {
//     name: "Button",
//     route: "/docs/button",
//     isNew: false,
//   },
//   {
//     name: "Checkbox",
//     route: "/docs/checkbox",
//     isNew: false,
//   },
//   {
//     name: "Collapsible",
//     route: "/docs/collapsible",
//     isNew: false,
//   },
//   {
//     name: "ScrollArea",
//     route: "/docs/scroll-area",
//     isNew: false,
//   },
// ];

export default function SideMenu() {
  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] col-span-3 w-full shrink-0 overflow-y-auto border-r border-r-slate-100 dark:border-r-slate-700 md:sticky md:block">
      <ScrollArea>
        <ScrollAreaViewPort>
          <div className="flex flex-col-gap-8 px-5 py-10">
            <div>
              <h1 className="font-medium mb-2">Component</h1>
              {/* {COMPONENTS.map((comp) => (
                <Link
                  href={comp.route}
                  key={comp.name}
                  className="capitalize font-light text-sm"
                >
                  <p className="pb-1">{comp.name}</p>
                </Link>
              ))} */}
            </div>
          </div>
        </ScrollAreaViewPort>
        <ScrollAreaScrollBar orientation="vertical">
          <ScrollAreaThumb />
        </ScrollAreaScrollBar>
      </ScrollArea>
    </aside>
  );
}
