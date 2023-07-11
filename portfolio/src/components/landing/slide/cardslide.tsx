/** @jsxImportSource @emotion/react */
import {cardStyle, containderStyle, cardTitle} from "./card.style"
const CardSlide = () => {
    let cardArr = ["NextJS","ReactJS","Tailwind CSS","TypeScript","React-query","Redux"]
    return (
        <>
        <br />
        <br />
        <div className="DescBig">Stack</div>
            <br />
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