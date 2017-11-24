import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { createHistory } from 'history'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//import { hashHistory } from 'react-router'
//import { browserHistory } from 'react-router-dom'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(newCity) {
        if (newCity == null) {
            return
        }
		//console.info(this.props.userInfoActions)
		console.info(this.props.userinfo)
        // 修改 redux
        const userinfo = this.props.userinfo
        userinfo.cityName = newCity
        this.props.userInfoActions.update(userinfo)

        // 修改 cookie
        localStore.setItem(CITYNAME, newCity)

        // 跳转页面
        this.props.history.push({  
		  pathname: '/home',  
		})  
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
	console.info(state)
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
	//console.info(6666)
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)