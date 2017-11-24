import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import './static/css/common.less'

// 引用并执行 redux-demo
// import fn from './redux-demo.js'
// fn()

import RouteMap from './router/routeMap.jsx'

const store = configureStore()

render(
    <Provider store={store}>
        <RouteMap/>
    </Provider>,
    document.getElementById('root')
)










/*

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import RouteMap from './router/routeMap.jsx'


ReactDOM.render(
	<RouteMap />,
	document.body
);*/








