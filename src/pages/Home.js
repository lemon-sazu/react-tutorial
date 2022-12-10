import { useGetCat } from "./useGetCat"

export const Home = () => {

const [data, isCatLoading, catReFetch] = useGetCat();

    if (isCatLoading) {
        return <h3 className="app">Loading ...</h3>
    }
    return <div className="app">
        <h2>This is Home Page.</h2>
        <p>
            {data?.fact}
        </p>
        <button onClick={catReFetch}>Update Data</button>
    </div>
}