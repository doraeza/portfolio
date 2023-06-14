import React, { useEffect } from "react"

const TopButton = () => {
    const [showButton, setShowButton] = React.useState(false);

    const scrollToTop = () => {
        window.scroll({top: 0, behavior: 'smooth'})
    }

    useEffect(()=>{
        const ShowButtonClick =() => {
            if(window.scrollY > 800){
                setShowButton(true)
            }else{
                setShowButton(false)
            }
        }
        window.addEventListener("scroll", ShowButtonClick)
        return () => {
            window.removeEventListener("scroll", ShowButtonClick)
        }
    },[])

    return (
        <>
            {showButton && 
                <div  className='transition duration-100 ease-in-out
                transform hover:-translate-y-1 hover:scale-110'>
                    <svg height="50" width="200">
                     <path d="M150 0 L75 200 L225 200 Z" onClick={scrollToTop} />
                    </svg>
                </div>}
        </>
    )
}
export default TopButton