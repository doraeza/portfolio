import React from "react"

const Desc = () => {
    return (
        <div className="flex flex-col ">
        <div className="text-9xl max-w-full flex flex-row-reverse subpixel-antialiased">
            WEB
        </div>
        <div className="text-9xl max-w-full flex flex-row-reverse subpixel-antialiased">
            PORTFOLIO
        </div>
        </div>
    )
}
export default React.memo(Desc)