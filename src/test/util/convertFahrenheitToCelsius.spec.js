import convert from '../../util/convertFahrenheitToCelsius'

describe('convertFarenheitToCelsius', () => {
	it('returns null when given nothing', () => {
		const result = convert()
		expect(result).toEqual(null)
	})

	it('returns correct farenheit to celsius conversion given a number', () => {
		const result = convert(50)
		expect(result).toEqual(10)
	})

	it('returns correct farenheit to celsius conversion given a string that is a number', () => {
		const result = convert('50')
		expect(result).toEqual(10)
	})

	it('converts farenheit to celsius to two decimal places', () => {
		const result = convert(51)
		expect(result).toEqual(10.56)
	})
})
