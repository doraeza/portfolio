/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import {cardStyle, containderStyle} from "./card.style"
const CardSlide = () => {
    let cardArr = ["card1","card2","card3","card4"]
    return (
        <>
        <div css={containderStyle}>
            {cardArr.map((el:string)=>{
              return <div css={cardStyle} >
                    <div className="CardTitle">
                        {el}
                    </div>
                </div>
            })}
        </div>
        </>
    )
}
export default CardSlide