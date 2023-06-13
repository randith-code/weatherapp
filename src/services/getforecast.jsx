import axios from "axios"

export const getforecast = async(lat, lon) => {
    const apiKey = '64595fc2f5670b2a210b45d6f73d20ca'
    
    try{
        const URL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`
        const response = await axios.get(URL);
        return response.data
    }
    catch (error) {
        console.error('Error fetching weather data:', error);
    }
}