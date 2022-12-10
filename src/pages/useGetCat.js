import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetCat = () => {
    const { data, isLoading:isCatLoading, refetch } = useQuery(['cat'], async () => {
        return axios.get('https://catfact.ninja/fact').then((res) => res.data)
    })

    const catReFetch = () =>{
        refetch()
    }

    return [data, isCatLoading, catReFetch]
}