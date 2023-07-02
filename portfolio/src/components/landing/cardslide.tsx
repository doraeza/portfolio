/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const CardSlide = () => {
    return (
        <>
        <div css={css({
            position: "relative",
            height: "300px",
            width: "600px",
            top: "60px",
            left: "calc(50% - 300px)",
            display: "flex",
            border: "solid 1px red"
        })}>
            <div className="Card" >
                <div className="CardTitle">
                    Test1
                </div>
            </div>
            <div className="Card" >
                <div className="CardTitle">
                    Test2
                </div>
            </div>
            <div className="Card" >
                <div className="CardTitle">
                    Test3
                </div>
            </div>
        </div>
        </>
    )
}
export default CardSlide