// src/layouts/desktop_layout.js
import Body from "./body"
import Footer from "./footer"
import Header from "./header"
import React from "react"

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <section>
                <Header />
                <Body>{children}</Body>
            </section>
            <Footer />
        </>
    )
}

export default MobileLayout
