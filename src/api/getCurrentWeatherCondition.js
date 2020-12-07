import apiKey from './api-key'
import superAgent from 'superagent'

const buildWeatherApiQueryString = (searchCriteria, searchCriteriaType) => {
	if (searchCriteriaType === 'city') {
		return `q=${searchCriteria}`
	} else if (searchCriteriaType === 'zip') {
		return `zip=${searchCriteria}`
	}

	const [lat, lon] = searchCriteria.replace(/ /g, '').split(',')
	return `lat=${lat}&lon=${lon}`
}

const getCurrentWeatherCondition = async (searchCriteria, searchCriteriaType) => {
	const url = `http://api.openweathermap.org/data/2.5/weather?${buildWeatherApiQueryString(searchCriteria, searchCriteriaType)}&appid=${apiKey}&units=imperial`
	const result = await superAgent.get(url)
	return result.body
}

export default getCurrentWeatherCondition
