import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
	containerSpacing: {
		marginTop: '20px',
	},
})

const CurrentWeatherConditions = () => {
	const classes = useStyles()

	const [searchCriteria, setSearchCriteria] = useState('')
	const handleSearchCriteriaChange = event => setSearchCriteria(event.target.value)

	return (
		<>
			<Grid container className={classes.containerSpacing}>
				<Grid container justify="center" item xs={12} className={classes.containerSpacing}>
					<Typography variant="h3">Current Weather Conditions</Typography>
				</Grid>
				<Grid container justify="center" item xs={12} className={classes.containerSpacing}>
					<form>
						<TextField label="Enter a city" variant="outlined" value={searchCriteria} onChange={handleSearchCriteriaChange} />
					</form>
				</Grid>
				<Grid container justify="center" item xs={12} className={classes.containerSpacing}>
					<Button variant="contained" color="primary">
						Get forecast
					</Button>
				</Grid>
			</Grid>
		</>
	)
}

export default CurrentWeatherConditions
