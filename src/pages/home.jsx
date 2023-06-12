import { useState } from "react"
import { NavBar } from "../components/navBar"
import { Weathercard } from "../components/weathercard"
import  emptyCloud  from '../utils/emptyCloud.png'



const Home = () => {

    const [weatherList, setWeatherList] = useState([])
    const [seemore, setMore] = useState(false)

    return(
        <div className="w-screen h-fit">
            <NavBar setData = {setWeatherList}/>
            {weatherList.length !== 0  ?  <div className="w-screen h-fit flex flex-wrap justify-center">
               {
                    weatherList.slice(0,21).map((record, i) => {
                        const wdata = {
                            temp:record.main.temp,
                            date:record.dt_txt,
                            weather:record.weather[0].main,
                            description:record.weather[0].description,
                            icon:record.weather[0].icon
                        }
                        return(<Weathercard key={i} {...wdata}/>)
                    })
                }
                {
                    seemore ? weatherList.slice(21).map((record, i) => {
                        const wdata = {
                            temp:record.main.temp,
                            date:record.dt_txt,
                            weather:record.weather[0].main,
                            description:record.weather[0].description,
                            icon:record.weather[0].icon
                        }
                        return(<Weathercard key={i} {...wdata}/>)
                    }) : <></>
                }
                <span className="w-5/6 h-fit flex justify-end">
                    <p onClick={() => setMore(!seemore)} className="text-purple-main border-purple-main border-2 text-xs p-1 rounded-3xl cursor-pointer">{!seemore ? 'see more...': 'see less'}</p>
                </span>
            </div> : <EmptyCloud/>}
        </div>
    )
}

const EmptyCloud = () => {
    return(
        <div className="w-24 h-24 my-24 mx-auto grid place-items-center">
            <img className="filter grayscale" src={emptyCloud} alt="emptyCloud" />
        </div>
    )
}

export default Home

