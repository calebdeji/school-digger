import React, { Component } from 'react'
import './NotFoundPage.css';

export default class NotFoundPage extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return(
            <div>Not Found</div>
        );
    }
}