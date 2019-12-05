import React, { Component, Fragment } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import SchoolTemplate from "./SchoolTemplate";
import { apiResponse } from "../../redux/actions/Actions";
import { connect } from "react-redux";
import "./SchoolList.css";
import { promised } from "q";

export class SchoolList extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        // this.state = props;
    }

    componentDidMount() {

        const apiValue = async () => {
            const options = {
                url: `https://api.schooldigger.com/v1.2/schools?st=CA&appID=${process.env.REACT_APP_AppID}&appKey=${process.env.REACT_APP_APIKey}`,
                method: "GET",
                header: {
                    accept: "application/json"
                }
            };
            const response = await axios(options);
            return response;


        }
        // console.log("props : ",this.props);
        apiValue().then((value)=>{
            console.log("value is : ", value.data.schoolList);
            this.props.apiResponses(value.data.schoolList);
            console.log("props : ", this.props)
        })
    }
    handleSchoolClick = schoolId => {};

    render() {
        return (
            <Fragment>
                {/**
                 * @param item the indiviual school generated from the API
                 */}

                 {
                     this.props.apiObjectResponse.map((item,index)=>{
                         
                     })
                 }
                
                
            </Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return { apiObjectResponse : state };
}
const mapDispatchToProps = { apiResponses : apiResponse }
export default connect(mapStateToProps, mapDispatchToProps)(SchoolList);
