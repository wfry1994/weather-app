import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import CurrentWeatherConditions from './components/CurrentWeatherConditions'

const Routes = () => (
	<BrowserRouter basename="weather-app">
		<Switch>
			<Route exact path="/" component={CurrentWeatherConditions} />
		</Switch>
	</BrowserRouter>
)

export default Routes
