import { Tabs, TabList, TabsContent, TabsTrigger } from "@/components/Tabs";

const tabs = [
    {
        label: "Profile",
        value: "profile",
    },
    {
        label: "Settings",
        value: "settings",
    },
    {
        label: "Preferences",
        value: "preferences",
    },
];

export default function AnimatedTabs() {
    return (
        <Tabs className=" w-full  p-4 " defaultValue={tabs[0].value}>
            <TabList className="grid grid-cols-3 gap-4 bg-gray-200 dark:bg-gray-700 rounded-md p-1">
                {tabs.map(tab => (
                    <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="rounded-md h-10 inline-flex items-center justify-center px-4 text-sm relative group outline-none w-full"
                    >
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabList>
            {tabs.map(tab => (
                <TabsContent
                    key={tab.value}
                    value={tab.value}
                    className="bg-gray-200 dark:bg-gray-700 rounded-md w-full text-sm p-4 mt-2 outline-none"
                >
                    {tab.label}
                </TabsContent>
            ))}
        </Tabs>
    );
}
