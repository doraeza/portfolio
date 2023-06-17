
const CustomButton = ({text, pressFuction}:{text:string, pressFuction?:(event: MouseEvent) => void}) => {
    if(pressFuction){
        return (
            <button onClick={()=>pressFuction}>
                <p className="text-9xl max-w-full flex flex-row-reverse subpixel-antialiased">{text}</p>
            </button>
        )    
    }else{
        return (
            <button onClick={()=>pressFuction}>
            <p className="text-9xl max-w-full flex flex-row-reverse subpixel-antialiased">{text}</p>
            </button>
        )    
    }
    
}
export default CustomButton