import logo from '../utils/Logo - Balck.png'
import weather from '../utils/weather.png'
import password from '../utils/password.png'
import email from '../utils/email.png'

export const Hero = () => {
    return(
        <div className="w-screen h-screen md:h-screen md:w-2/5 bg-purple-light grid place-items-center">
            <div className='w-5/6 h-5/6 flex flex-col justify-around'>
                <img className='w-1/3' src={logo} alt="black logo" />
                <span className='w-full h-fit grid place-items-center my-8'>
                    <img className='lg:max-w-sm' src={weather} alt="weather-clouds" />
                </span>
                <h1 className='text-purple-main font-bold text-4xl lg:text-4xl'>Keep Ahead of the Weather</h1>
                <p className='text-purple-main text-sm mt-4'>Stay prepared and informed with our comprehensive weather updates, forecasts, and real-time alerts to always stay one step ahead of changing weather conditions.</p>
            </div>
        </div>
    )
}

export const Login = () => {
    return(
        <div className="w-screen h-screen md:h-screen md:w-3/5 grid place-items-center">
            <div className=' w-8/12  md:w-6/12 h-fit flex flex-col justify-around'>


                <h1 className='font-semibold text-xl md:text-2xl'>Welcome !</h1>
                <p className='text-purple-main text-sm my-6'>Start to get update wih weather</p>

                {/* login input fields */}

                <form className='flex flex-col' action="">
                    <span className='flex items-center bg-purple-light rounded-xl my-2'>
                        <span className='wi-fit h-fit bg-white m-1 rounded-lg'> 
                            <img className='h-full p-1' src={email} alt="" />
                        </span>
                        <input className='outline-none placeholder-purple-main text-purple-main bg-transparent p-2 w-5/6' type="email" placeholder='you@example.com'/>
                    </span>
                    <span className='flex items-center bg-purple-light rounded-xl my-2'>
                        <span className='wi-fit h-fit bg-white m-1 rounded-lg'> 
                            <img className='h-full p-1' src={password} alt="" />
                        </span>
                        <input className='outline-none placeholder-purple-main text-purple-main bg-transparent p-2 w-5/6' type="password" placeholder='At least 8 characters'/>
                    </span>
                    <span className='my-2 flex justify-end'>
                        <p className='text-purple-main text-sm cursor-pointer'>Forget password?</p>
                    </span>
                    <button className='bg-purple-main text-white rounded-xl h-8'>Login</button>
                </form>

                {/* end of form */}

                <span className='flex justify-between my-6 w-fit'>
                    <p className='text-purple-main font-normal text-sm'>Don't you have an account?</p>
                    <h2 className='text-purple-main font-semibold text-base ml-2 cursor-pointer'>Sign Up</h2>
                </span>

            </div>
        </div>
    )
}