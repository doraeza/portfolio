// src/layouts/desktop_layout.js
import CustomButton from "../common/CustomButton"
import Body from "./body"
import Footer from "./footer"
import Header from "./header"
import React from "react"

const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="flex flex-col justify-between">
                <Header />
                <CustomButton text="CustomButton"/>
                <Body>{children}</Body>
            </div>
            <Footer />
        </>
    )
}

export default DesktopLayout
