import { useState } from "react"
import { useHistory } from "react-router-dom"

const Home = () => {
    const [inputData, setInputData] = useState("")
    // const [isDataSent, setDataSent] = useState(false)
    const history = useHistory()
    console.log(history)

    const handleChange = e => {
        setInputData(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        // setDataSent(true)
        // console.log(inputData)
        /**
         * This is the other way, we call history.push(PATH)
         */

        history.push(`/movies/${inputData}/1`)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search For A Movie" onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            {/* 
            one way of handling submit, checks that bool we set
            for dataSent and if it's true, redirects to the designated path
            */}
            {/* {isDataSent && <Redirect to={`/movies/${inputData}`} />} */}
        </>
    )
}

export default Home