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


	const getDisplayTemperature = (temperature, unit = selectedDisplayUnits) =>  unit === 'celsius' ? convertFarenheitToCelsius(temperature) : temperature
	
	const setDisplayTemperatures = unit => {
		setDisplayTemperature(getDisplayTemperature(weatherConditions.main.temp, unit))
		setDisplayFeelsLikeTemp(getDisplayTemperature(weatherConditions.main.feels_like, unit))
	}

	useEffect(() => {
		setDisplayTemperatures()
	}, [weatherConditions])

	const renderDegreeUnit = () => {
		if (selectedDisplayUnits === 'farenheit') {
			return 'F'
		}

		return 'C'
	}

	const handleDisplayUnitChange = event => {
		const unit = event.target.value
		setSelectedDisplayUnits(unit)
		setDisplayTemperatures(unit)
	}

	return (
		<Card>
			<CardContent>
				<Typography> Location: {`${weatherConditions.name}, ${weatherConditions.sys.country}`} </Typography>
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
