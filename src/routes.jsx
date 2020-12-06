import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import appComponent from './components/AppComponent'

const Routes = () => (
	<BrowserRouter basename="weather-app">
		<Switch>
			<Route exact path="/" component={appComponent} />
		</Switch>
	</BrowserRouter>
)

export default Routes
