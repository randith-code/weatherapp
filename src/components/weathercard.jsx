import we from '../utils/10d@2x.png'

export const Weathercard = () => {
    return(
        <div className="relative w-4/6 h-fit md:w-1/4 md:min-w- rounded-xl m-8 shadow-md shadow-slate-400 flex flex-col justify-center items-center">
            <img className="absolute top-4 right-4 w-1/2 h-auto z-0" src={we} alt="weather icon" />
            <div className="w-5/6 h-5/6">
                <h1 className="text-7xl z-50 mt-8">{25}°</h1>
                <p className='mt-6 text-purple-main'>Rain</p>
                <p className='mt-2 text-purple-main font-semibold'>09 jun 2023</p>
                <p className='mt-2 text-purple-main'>16.00</p>
                <span className='flex justify-end'>
                    <p className='text-purple-main text-4xl m-2 cursor-pointer'>...</p>
                </span>
            </div>
        </div>
    )
}