import { ThreeDots } from "react-loader-spinner"

const Loading = () => {
    return (
        <>
            <ThreeDots 
                height="40" 
                width="40" 
                radius="10"
                color="#33FF33" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
            />
        </>
    )
}
export default Loading