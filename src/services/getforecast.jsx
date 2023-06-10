
export const getforecast = async(lat, lon) => {
    const apiKey = '64595fc2f5670b2a210b45d6f73d20ca'
    const URL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    const response = await fetch(URL)
    const data = await response.json()
    return data
}