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
                paddingTop: "80px"
            })}>
                <Header />
                <div css={css({
                    minHeight: "calc(100vh - 150px)"
                })}>{children}</div>
                <Footer />
            </div>
        </>
    )
}

export default DesktopLayout
