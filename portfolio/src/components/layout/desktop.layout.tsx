// src/layouts/desktop_layout.js
import Body from "./body"
import Footer from "./footer"
import Header from "./header"
import React from "react"

const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Body>
                <div className="pb-10">
                <Header />
                </div>
                <div className="body">{children}</div>
            </Body>
            <Footer />
        </>
    )
}

export default DesktopLayout
