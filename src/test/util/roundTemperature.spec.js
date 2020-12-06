import roundTemperatureReading from '../../util/roundTemperature'

describe('roundTemperatureReading', () => {
	it('handles null', () => {
		const result = roundTemperatureReading(null)

		expect(result).toEqual(0)
	})

	it('does not add decimal places for whole numbers', () => {
		const result = roundTemperatureReading(32)

		expect(result).toEqual(32)
	})

	it('rounds readings with more than two decimal places to two decimal places', () => {
		const result = roundTemperatureReading(10.555555555)

		expect(result).toEqual(10.56)
	})
})
