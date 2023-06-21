
const CustomButton = ({text, pressFuction}:{text:string, pressFuction?:(event: MouseEvent) => void}) => {
    if(pressFuction){
        return (
            <div style={{border:"1px soild white"}}>
                <button className="cursor-pointer" onClick={()=>pressFuction}>
                    <p className="text-9xl max-w-full flex flex-row-reverse subpixel-antialiased">{text}</p>
                </button>
            </div>
        )    
    }else{
        return (
            <div style={{border:"1px soild"}}>
                <button style={{background: "#191919", cursor: "pointer", borderRadius: "9px", border:"solid 1px #9bd65cd6"}} onClick={()=>pressFuction}>
                <p  className="Desc absolute bottom-5 text-center w-full" > {text}</p>
                </button>
            </div>
        )    
    }
    
}
export default CustomButton