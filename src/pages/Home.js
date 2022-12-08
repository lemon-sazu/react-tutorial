import { useContext } from "react"
import { AppContext } from "../App"

export const Home = () => {
    const {name} = useContext(AppContext)
    return <div className="app">
        <h2>hi {name}, This is Home Page.</h2>
    </div>
}