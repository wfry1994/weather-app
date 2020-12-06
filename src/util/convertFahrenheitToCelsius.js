import isNil from 'lodash/isNil'
import roundTemperature from './roundTemperature'

export default temperature => {
	if (isNil(temperature)) {
		return null
	}

	return roundTemperature(((Number(temperature) - 32) * 5) / 9)
}
