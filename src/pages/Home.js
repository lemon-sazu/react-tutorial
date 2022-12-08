import { useQuery } from "@tanstack/react-query"
import axios from "axios"
export const Home = () => {
    const { data:catData, isLoading, refetch } = useQuery(['cat'], () => {
        return axios.get('https://catfact.ninja/fact').then((res) => res.data)
    })
    if(isLoading){
        return <h3 className="app">Loading ...</h3>
    }
    return <div className="app">
        <h2>This is Home Page.</h2>
        <p>
            {catData?.fact}
        </p>
        <button onClick={refetch}>Update Data</button>
    </div>
}