import React, { Component, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SchoolTemplate from "./SchoolTemplate";
import { apiResponse, currentLink } from "../../redux/actions/Actions";
import { connect } from "react-redux";
import "./SchoolList.css";

export class SchoolList extends Component {
    constructor(props) {
        super(props);
        this.props = props;
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
        };
        apiValue().then(value => {
            this.props.apiResponses(value.data.schoolList);
        });
    }
    handleSchoolClick = schoolId => {
        console.log("handle seen");
        this.props.currentLink(schoolId);
    };

    render() {
        return (
            <Fragment>
                {/**
                 * @param item the indiviual school generated from the API
                 */}
                {this.props.apiObjectResponse.ReducerAPI.apiObjectResponse
                    .length !== 0 &&
                    this.props.apiObjectResponse.ReducerAPI.apiObjectResponse.map(
                        (item, index) => {
                            return (
                                <li key={item.schoolid} className="list">
                                    <Link
                                        to="/component/SchoolDetails"
                                        className="each-school"
                                        onClick={() => {
                                            this.handleSchoolClick(item);
                                        }}
                                    >
                                        <SchoolTemplate item={item} />
                                    </Link>
                                </li>
                            );
                        }
                    )}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return { apiObjectResponse: state };
};
const mapDispatchToProps = {
    apiResponses: apiResponse,
    currentLink: currentLink
};
export default connect(mapStateToProps, mapDispatchToProps)(SchoolList);
