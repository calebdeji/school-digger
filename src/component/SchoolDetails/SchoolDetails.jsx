import React, { Component } from "react";
import * as localforage from 'localforage'

export default class SchoolDetails extends Component {
	constructor(props) {
	  super(props);
	  this.props = props;
	  this.state = {details : ''}
	}

	componentDidMount() {
    // console.log("props passed : ", this.props);
		localforage.getItem("currentSchool").then((value)=>{
			if(value !==null){
				this.setState({details : value});
				
				console.log("db seen : ",value)
			}
			else{
				console.log("null db")
			}
			console.log("this state is : ", this.state.details.address);

		});
	}

  	render() {
		return(
			<div className="school-details">
				<h1 className="school__details-name">
				</h1> 
				<h3 className="school_details-contact">
					{this.state.details.phone}
				</h3>
				<h3 className="school__details-address">
					<span>Street : {this.state.details.address.street}</span>
					<span>City : {this.state.details.address.street} </span>
					<span>State : {this.state.details.address.street} </span>
					<span>ZIP : {this.state.details.address.street} </span>
					{/* <span>County name : {this.state.details.county.countyName} </span> */}
				</h3>
			</div>
		)
  	}
}
