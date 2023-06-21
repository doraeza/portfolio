import useProductList from "../../hooks/useProductlist/Index"

const HookSigniture = () => {
    const { productData } = useProductList()
    //hook을 통한 데이터 바인딩
    //해당하는 데이터 가공 컴포넌트에서 hook을 통해 바인딩한 데이터를 한번 더 가공
    //그리고 해당 함수를 호출하는 고차컴포넌트에게 결과값을 넘겨주게됨
    return productData
}
export default HookSigniture