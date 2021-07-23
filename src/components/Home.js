import { useState } from "react"
import { Redirect } from "react-router-dom"

const Home = () => {
    const [inputData, setInputData] = useState("")
    const [isDataSent, setDataSent] = useState(false)

    const handleChange = e => {
        setInputData(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setDataSent(true)
        console.log(inputData)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search For A Movie" onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            {isDataSent && <Redirect to={`/movies/${inputData}`} />}
        </>
    )
}

export default Home