// src/layouts/desktop_layout.js
import Footer from "./footer"
import Header from "./header"
import React from "react"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Body from "./body";

const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div css={css({
                backgroundColor: "rgb(25,25,25)",
                paddingTop: "80px"
            })}>
                <Header />
                <Body>
                    {children}
                </Body>
                <Footer />
            </div>
        </>
    )
}

export default DesktopLayout
