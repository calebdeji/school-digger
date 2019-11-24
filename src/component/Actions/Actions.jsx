import React, { Component } from 'react'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Actions.css';

require('dotenv').config();


export default class Actions extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    
    

    handleSearch(event){
        event.preventDefault();
        
    }
    render(){
        return(
            <div className="action-field">
                <form action="#" onSubmit={this.handleSearch} className="form">
                    <input type="search" name="search" id="search" className="form__search-field"/>
                    <button onClick={ this.handleSearch } className="form__search-button"> <FontAwesomeIcon icon ={faSearch}/> </button>
                </form>
            </div>
        );
    }
}