import { AppContext } from "../App"
import { useContext } from "react"

export const EditProfile = () => {
    const { setName } = useContext(AppContext)

    return <div className="app">
        <input onChange={(event) => setName(event.target.value)} type="text" placeholder="Name" />
    </div>
}