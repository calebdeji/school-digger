import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import dummyImage from '../../logo.png';
import axios from 'axios';
import './SchoolList.css';

export default class SchoolList extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {apiResponse : []}
    }

    componentDidMount(){
        const options = {
            url : `https://api.schooldigger.com/v1.2/schools?st=CA&appID=${process.env.REACT_APP_AppID}&appKey=${process.env.REACT_APP_APIKey}`,
            method : 'GET',
            header : {
                accept : 'application/json'
            }
        }
        axios(options).then((response)=>{
            this.setState({apiResponse : response.data.schoolList});
            console.log("state : ",response);
        }).catch((err)=>{
            console.log("error : ", err, "api : ", process.env.APIKey);
        });
    }
    render(){
        return(
            <Fragment>
                {
                    this.state.apiResponse.map((item,index)=>{
                        return(
                            <Link to= '' key={item.schoollid} className="each-school">
                                <img src={dummyImage} alt="A dummy figure" className="each-school__image"/>
                                <div className="each-school__description">
                                    <p className="each-school__name"> { item.schoolName } </p>
                                    <p className="each-school__address"> { item.address.html } </p>
                                    <p className="each-school__level"> { item.schoolLevel } Level</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                </div>
                            </Link>
                        );
                    })
                }
            </Fragment>
        );
    }
}