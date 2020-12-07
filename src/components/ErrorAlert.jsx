import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import PropTypes from 'prop-types'

const ErrorAlert = ({ shouldShowError, handleClose, errorMessage }) => {
	return (
		<Snackbar open={shouldShowError} autoHideDuration={6000} onClose={handleClose}>
			<MuiAlert onClose={handleClose} severity="error">
				{errorMessage}
			</MuiAlert>
		</Snackbar>
	)
}

ErrorAlert.propTypes = {
	shouldShowError: PropTypes.bool,
	handleClose: PropTypes.func,
	errorMessage: PropTypes.string,
}

export default ErrorAlert
