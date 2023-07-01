/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const CardSlide = () => {
    return (
        <>
        <div css={css({
            position: "absolute",
            height: "300px",
            width: "600px",
            top: "60px",
            left: "calc(50% - 300px)",
            display: "flex",
        })}>
            <div className="Card">

            </div>
            
        </div>
        </>
    )
}
export default CardSlide