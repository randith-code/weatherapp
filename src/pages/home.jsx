import { NavBar } from "../components/navBar"
import { Weathercard } from "../components/weathercard"

const Home = () => {
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
            </div>
        </div>
    )
}

export default Home