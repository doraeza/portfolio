// import Aside from "@components/aside";
import React from "react"
// import MobileLayout from "./mobile.layout"
import DesktopLayout from "./desktop.layout"
import { useMediaQuery } from "react-responsive"
import MobileLayout from "./mobile.layout"

export default function Layout({ children }: { children: React.ReactNode }) {
    
    const Desktop = () => {
        const isDesktop = useMediaQuery({ minWidth: 768 })
        if (isDesktop) {
            return <DesktopLayout>{children}</DesktopLayout>
        }else{
            return <MobileLayout>{children}</MobileLayout>
        }
    }

    return Desktop()
    
}
