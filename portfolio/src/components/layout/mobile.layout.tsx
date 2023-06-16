// src/layouts/desktop_layout.js
import Body from "../body"
import Footer from "../footer"
import Header from "../header"
import React from "react"

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="flex flex-col justify-between">
                <Header />
                <Body>{children}</Body>
                <div></div>
            </div>
            <Footer />
        </>
    )
}

export default MobileLayout
