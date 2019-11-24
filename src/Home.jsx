import React, { Component, Fragment } from 'react'
import Actions from './component/Actions/Actions';
import SchoolList from './component/SchooList/SchoolList'

export default class Home extends Component{
    
    render(){
        return(
            <Fragment>
                <Actions />
                <SchoolList />
            </Fragment>
        );
    }
}
