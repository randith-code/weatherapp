import { useEffect, useState } from "react"
import { NavBar } from "../components/navBar"
import { Weathercard } from "../components/weathercard"
import { getforecast } from "../services/getforecast"



const Home = () => {

    const [data, setData] = useState()

    useEffect(() => {
        let getdata =async() => {
            let d = await getforecast(90.4444, 85.3534)
            setData(d)
        }
        getdata()
    },[])

    return(
        <div className="w-screen h-fit">
            <NavBar/>
            <div className="w-screen flex flex-wrap justify-center">
                <Weathercard/>
                <Weathercard/>
                <Weathercard/>

                <span className="w-5/6 h-fit flex justify-end">
                    <p className="text-purple-main border-purple-main border-2 text-xs p-1 rounded-3xl cursor-pointer">see more...</p>
                </span>
                {console.log(data)}
            </div>
        </div>
    )
}

export default Home