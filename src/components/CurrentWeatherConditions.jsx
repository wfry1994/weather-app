import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import WeatherConditionsCard from './WeatherConditionsCard'
import SearchCriteriaSelector from './SearchCriteriaSelector'
import getWeatherCondition from '../api/getCurrentWeatherCondition'
import ErrorAlert from './ErrorAlert'

const useStyles = makeStyles({
	containerSpacing: {
		marginTop: '20px',
	},
})

const CurrentWeatherConditions = () => {
	const classes = useStyles()

	const [searchCriteria, setSearchCriteria] = useState('')
	const [selectedSearchCriteriaType, setSelectedSearchCriteriaType] = useState('city')
	const [currentWeatherConditions, setCurrentWeatherConditions] = useState(null)
	const [lookupErrorMessage, setLookupErrorMessage] = useState('')
	const [shouldShowError, setShouldShowError] = useState(false)

	const handleSearchCriteriaChange = event => setSearchCriteria(event.target.value)
	const handleSearchCriteriaTypeChange = event => {
		setSearchCriteria('')
		setSelectedSearchCriteriaType(event.target.value)
	}

	const lookupCurrentWeatherCondition = async () => {
		setLookupErrorMessage('')

		try {
			const weatherCondition = await getWeatherCondition(searchCriteria, selectedSearchCriteriaType)
			setCurrentWeatherConditions(weatherCondition)
		} catch (e) {
			setShouldShowError(true)
			setLookupErrorMessage('There was an issue fetching current weather conditions with the provided search criteria. Please try again.')
			setCurrentWeatherConditions(null)
			console.error(e.message)
		}
	}

	const handleAlertClose = () => setShouldShowError(false)

	const handleFormSubmit = event => {
		event.preventDefault()

		if (searchCriteria) {
			lookupCurrentWeatherCondition()
		}
	}

	return (
		<>
			<ErrorAlert shouldShowError={shouldShowError} handleClose={handleAlertClose} errorMessage={lookupErrorMessage} />
			<Grid container className={classes.containerSpacing}>
				<Grid container justify="center" item xs={12} className={classes.containerSpacing}>
					<Typography variant="h3">Current Weather Conditions</Typography>
				</Grid>
				<Grid container justify="center" item xs={12} className={classes.containerSpacing}>
					<form onSubmit={handleFormSubmit}>
						<Grid item xs={12}>
							<SearchCriteriaSelector selectedCriteria={selectedSearchCriteriaType} handleChange={handleSearchCriteriaTypeChange} />
						</Grid>
						<Grid item container justify="center" xs={12}>
							<TextField label="Enter Search Criteria" variant="outlined" value={searchCriteria} onChange={handleSearchCriteriaChange} />
						</Grid>
					</form>
				</Grid>
				<Grid container justify="center" item xs={12} className={classes.containerSpacing}>
					<Button disabled={!searchCriteria} variant="contained" color="primary" onClick={lookupCurrentWeatherCondition}>
						Get forecast
					</Button>
				</Grid>
				<Grid container justify="center" item xs={12} className={classes.containerSpacing}>
					<WeatherConditionsCard weatherConditions={currentWeatherConditions} />
				</Grid>
			</Grid>
		</>
	)
}

export default CurrentWeatherConditions
