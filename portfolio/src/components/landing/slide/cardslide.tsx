/** @jsxImportSource @emotion/react */
import {cardStyle, containderStyle, cardTitle} from "./card.style"
const CardSlide = () => {
    let cardArr = ["card1","card2","card3","card4"]
    return (
        <>
        <div css={containderStyle}>
            {cardArr.map((el:string, idx:number)=>{
              return <div key={idx} css={cardStyle} >
                    <div css={cardTitle}>
                        {el}
                    </div>
                </div>
            })}
        </div>
        </>
    )
}
export default CardSlide