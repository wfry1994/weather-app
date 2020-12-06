import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import PropTypes from 'prop-types'

const SearchCriteriaSelector = ({ selectedCriteria, handleChange }) => {
	return (
		<FormControl component="fieldset">
			<FormLabel component="legend">How would you like to lookup the weather?</FormLabel>
			<RadioGroup row onChange={handleChange} value={selectedCriteria}>
				<FormControlLabel value="city" control={<Radio color="primary" />} label="City" />
				<FormControlLabel value="zip" control={<Radio color="primary" />} label="Zip Code" />
				<FormControlLabel value="gps" control={<Radio color="primary" />} label="GPS coordinates" />
			</RadioGroup>
		</FormControl>
	)
}

SearchCriteriaSelector.propTypes = {
	selectedCriteria: PropTypes.string,
	handleChange: PropTypes.func,
}

export default SearchCriteriaSelector
