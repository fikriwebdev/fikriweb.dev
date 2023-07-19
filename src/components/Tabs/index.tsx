import * as RadixTabs from "@radix-ui/react-tabs";

import { motion } from "framer-motion";
import React from "react";

const TabsContext = React.createContext({ active: "" });

const useTabsContext = () => {
    return React.useContext(TabsContext);
};

export const Tabs = React.forwardRef<HTMLDivElement, RadixTabs.TabsProps>(
    (props, ref) => {
        const [active, setActive] = React.useState(props.defaultValue ?? "");

        const { onValueChange, ...rest } = props;

        return (
            <TabsContext.Provider value={{ active }}>
                <RadixTabs.Root
                    ref={ref}
                    onValueChange={value => {
                        if (onValueChange) {
                            onValueChange(value);
                        }
                        setActive(value);
                    }}
                    {...rest}
                />
            </TabsContext.Provider>
        );
    }
);

export const TabList = React.forwardRef<
    HTMLDivElement,
    RadixTabs.TabsListProps
>((props, ref) => {
    return <RadixTabs.List ref={ref} {...props} />;
});

export const TabsTrigger = React.forwardRef<
    HTMLButtonElement,
    RadixTabs.TabsTriggerProps
>((props, ref) => {
    const { active } = useTabsContext();

    const { value, children, ...rest } = props;

    const isActive = active === props.value;

    return (
        <RadixTabs.Trigger ref={ref} value={value} {...rest}>
            {isActive ? (
                <motion.div
                    layoutId="tab-active"
                    id="tab-active"
                    className="absolute inset-0 bg-gray-300  dark:bg-gray-800"
                    style={{ borderRadius: "6px" }}
                />
            ) : null}
            <span
                className={`relative z-[1] text-black/80 dark:text-gray-300 dark:group-data-[state=active]:text-white group-data-[state=active]:text-black`}
            >
                {children}
            </span>
        </RadixTabs.Trigger>
    );
});

export const TabsContent = React.forwardRef<
    HTMLDivElement,
    RadixTabs.TabsContentProps
>((props, ref) => {
    return <RadixTabs.Content ref={ref} {...props} />;
});

Tabs.displayName = "Tabs";
TabList.displayName = "TabList";
TabsTrigger.displayName = "TabsTrigger";
TabsContent.displayName = "TabsContent";
