import { EditProfile } from "./EditProfile"
import { AppContext } from "../App"
import { useContext } from "react"

export const Profile = () => {

    const {name} = useContext(AppContext)

    return <div className="app">
        <h2>hi {name}, This is Profile Page.</h2>
        <h4>Edit Name</h4>
        <EditProfile />
    </div>
}