/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import {cardStyle} from "./card.style"
const CardSlide = () => {
    return (
        <>
        <div css={css({
            position: "relative",
            height: "450px",
            width: "600px",
            top: "60px",
            left: "calc(50% - 300px)",
            display: "flex",
        })}>
            <div css={cardStyle} >
                <div className="CardTitle">
                    Test1
                </div>
            </div>
            <div css={cardStyle} >
                <div className="CardTitle">
                    Test2
                </div>
            </div>
            <div css={cardStyle} >
                <div className="CardTitle">
                    Test3
                </div>
            </div>
        </div>
        </>
    )
}
export default CardSlide