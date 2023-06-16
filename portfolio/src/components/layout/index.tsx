// import Aside from "@components/aside";
import React from "react"
import MobileLayout from "./mobile.layout"
import DesktopLayout from "./desktop.layout"

export default function Layout({ children }: { children: React.ReactNode }) {
    
    const Desktop = () => {
        const isDesktop = useMediaQuery({ minWidth: 768 })
        if (isDesktop) {
            return <DesktopLayout>{children}</DesktopLayout>
        }
    }

    const Mobile = () => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        if (isMobile) {
            return <MobileLayout>{children}</MobileLayout>
        }
    }

    return (
        <div>
            {Desktop && Desktop()}
            {Mobile && Mobile()}
        </div>
    )
}
