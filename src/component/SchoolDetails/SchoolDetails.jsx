import React, { Component } from "react";
import { connect } from 'react-redux';

export class SchoolDetails extends Component {
	constructor(props) {
	  super(props);
	  this.props = props;
	  this.state = {details : ''}
	}
	componentDidMount(){
		console.log("props for school details is : ", this.props)
	}
  	render() {
		const details = this.props.ReducerLink.currentLink;
		return(
			<div className="school__detail">
				{
					details.map((item)=>{
						
					})
				}
			</div>
		)
  	}
}
const mapStateToPros = (state) =>{
	return {ReducerLink : state.ReducerLink}
}
export default connect(mapStateToPros,{})(SchoolDetails);
