import useJoke from "../../hooks/useJoke"
import Block from "../landing/block"

const Floating = () => {

    const {isLoading, error, jokeDataSet} = useJoke()
    return (
        <>
        <div>{jokeDataSet && jokeDataSet.setup}</div>
        <Block />
        </>
    )
}
export default Floating