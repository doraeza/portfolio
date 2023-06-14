
import useUserInfo from "../../hooks/useUserInfo"
import TopButton from "../common/topButton"
import Block from "./block"
import Footer from "./footer"
import Home from "./home"
import LeftRight from "./leftRight"
import UserReview from "./userReview"

const Landing = () => {
    const { isLoading, error, ApiData1,ApiData2, ApiData3 } = useUserInfo()

    return (
        <>
        <div className='fixed right-10 bottom-12 cursor-pointer'><TopButton/></div>
        <Home />
        <Block />
        <LeftRight />
        {ApiData1&&ApiData2&&ApiData3 ? <UserReview ApiData1={ApiData1} ApiData2={ApiData2} ApiData3={ApiData3}/> :<></>}
        <Footer />
        </>
    )
}
export default Landing