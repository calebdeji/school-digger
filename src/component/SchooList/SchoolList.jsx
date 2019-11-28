import React, { Component, Fragment } from "react";
import { Link} from "react-router-dom";
import SchoolTemplate from "./SchoolTemplate";
import * as localforage from 'localforage';  
import axios from "axios";
import "./SchoolList.css";

export default class SchoolList extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { apiResponse: [] };
    }

    componentDidMount() {

        localforage.config({
            driver      : localforage.LOCALSTORAGE, // Force WebSQL; same as using setDriver()
            name        : 'School Digger',
            version     : 1.0,
            storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
            description : 'Used to store the data fetched from school digger api'
        });

        localforage.getItem('api_response').then((value)=>{
            console.log("local forage active")
            if(value !== null){
                this.setState({apiResponse : value});
            }
            else{
                const options = {
                    url: `https://api.schooldigger.com/v1.2/schools?st=CA&appID=${process.env.REACT_APP_AppID}&appKey=${process.env.REACT_APP_APIKey}`,
                    method: "GET",
                    header: {
                        accept: "application/json"
                    }
                };
                axios(options)
                    .then(response => {
                        localforage.setItem('api_response',response.data.schoolList).then((value)=>{
                            this.setState({apiResponse : value});
                        });
                    })
                    .catch(err => {
                        console.log("error : ", err, "api : ", process.env.APIKey);
                    });
            }
        })

        
            
        
    }

    render() {
        return (
            <Fragment>
                {/**
                 * @param item the indiviual school generated from the API
                 */}
                
                {this.state.apiResponse.map((item, index) => {
                    return (
                            <li key={item.schoolid}>
                                <Link to = '/component/SchoolDetails' className="each-school" >
                                    <SchoolTemplate item={item} />
                                </Link> 
                            </li>

                    );
                })}
                
                
            </Fragment>
        );
    }
}
