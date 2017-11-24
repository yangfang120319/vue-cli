import React from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'

import App from '../containers/App.jsx'
import Home from '../containers/Home/index.jsx'
import List from '../containers/List/index.jsx'
import Detail from '../containers/Detail/index.jsx'
import City from '../containers/City'
import NotFound from '../containers/NotFound/index.jsx'

import Hello from '../containers/hello.jsx'

class RouteMap extends React.Component {
	
    render() {
        return (
             <Router>
			 <div>
				<Switch>
				<Route exact path="/home" component={Home}></Route>
				<Route path="/list" component={List}></Route>
				<Route path="/city" component={City}></Route>
				<Route path="/hello" component={Hello}></Route>
				<Route path="/detail/:id" component={Detail}></Route>
				<Route component={NotFound}/> 
				</Switch>
				
			</div>
            </Router>
        )
	}
}

export default RouteMap