import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Body({children}:{children: React.ReactNode}) {
    return (
        <div css={css({
            width: "96%",
            maxWidth: "1100px",
            height: "100%",
            margin: "0 auto",
            alignItems: "center",
            minHeight: "calc(100vh - 150px)"
        })}>
            {children}
        </div>
    )
}