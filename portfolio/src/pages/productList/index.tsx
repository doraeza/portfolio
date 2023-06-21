import hookData from './hookSigniture'
import DisplaySigniture from './displaySigniture';
const ProductList = () => {
    const hookResult = hookData

    //hoc 사용부분
    const resultJSX = DisplaySigniture(hookResult)

    return resultJSX
}
export default ProductList