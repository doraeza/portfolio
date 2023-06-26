// src/layouts/desktop_layout.js
import Footer from "./footer"
import Header from "./header"
import React from "react"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div css={css({
                backgroundColor: "rgb(25,25,25)",
            })}>
                <div className="pb-10">
                <Header />
                </div>
                <div className="body">{children}</div>
            </div>
            <Footer />
        </>
    )
}

export default DesktopLayout
