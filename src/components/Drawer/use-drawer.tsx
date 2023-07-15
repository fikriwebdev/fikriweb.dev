"use client";

import React, { PropsWithChildren } from "react";

export interface DrawerContextValues {
    position?: "left" | "right" | "top" | "bottom";
}

export const DrawerContext = React.createContext<DrawerContextValues>({
    position: "left",
});

export const DrawerContextProvider = ({
    children,
    ...value
}: DrawerContextValues & PropsWithChildren) => {
    return (
        <DrawerContext.Provider value={value}>
            {children}
        </DrawerContext.Provider>
    );
};

export const useDrawerContext = () => {
    return React.useContext(DrawerContext);
};
