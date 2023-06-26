import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Body({children}:{children: React.ReactNode}) {
    return (
        <div css={css({
            backgroundColor: "yellow",
          })}>
            {children}
        </div>
    )
}