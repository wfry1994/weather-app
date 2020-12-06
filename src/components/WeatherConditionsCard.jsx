import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import convertFarenheitToCelsius from '../util/convertFahrenheitToCelsius'

const WeatherConditionsCard = ({ weatherConditions }) => {
	if (isEmpty(weatherConditions)) {
		return null
	}

	const [displayTemperature, setDisplayTemperature] = useState(null)
	const [displayFeelsLikeTemp, setDisplayFeelsLikeTemp] = useState(null)
	const [selectedDisplayUnits, setSelectedDisplayUnits] = useState('farenheit')

	useEffect(() => {
		setDisplayTemperature(weatherConditions.main.temp)
		setDisplayFeelsLikeTemp(weatherConditions.main.feels_like)
	}, [weatherConditions])

	const renderDegreeUnit = () => {
		if (selectedDisplayUnits === 'farenheit') {
			return 'F'
		}

		return 'C'
	}

	const handleDisplayUnitChange = event => {
		const unit = event.target.value
		const newDisplayTemp = unit === 'celsius' ? convertFarenheitToCelsius(weatherConditions.main.temp) : weatherConditions.main.temp
		const newFeelslikeTemp = unit === 'celsius' ? convertFarenheitToCelsius(weatherConditions.main.feels_like) : weatherConditions.main.feels_like

		setSelectedDisplayUnits(unit)
		setDisplayTemperature(newDisplayTemp)
		setDisplayFeelsLikeTemp(newFeelslikeTemp)
	}

	return (
		<Card>
			<CardContent>
				<Typography>
					Current Temperature: {displayTemperature}
					&deg;
					{renderDegreeUnit()}
				</Typography>
				<Typography>
					Feels like: {displayFeelsLikeTemp}
					&deg;
					{renderDegreeUnit()}
				</Typography>
				<RadioGroup row value={selectedDisplayUnits} onChange={handleDisplayUnitChange}>
					<FormControlLabel value="farenheit" control={<Radio color="primary" />} label="Farenheit" />
					<FormControlLabel value="celsius" control={<Radio color="primary" />} label="Celsius" />
				</RadioGroup>
			</CardContent>
		</Card>
	)
}

WeatherConditionsCard.propTypes = {
	weatherConditions: PropTypes.object,
}

export default WeatherConditionsCard
