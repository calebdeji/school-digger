import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Logo from "../../logo.png";
import MapContainer from "../MapContainer/MapContainer";
import "./SchoolDetails.css";
export class SchoolDetails extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { details: "" };
    }
    componentDidMount() {
        console.log("props for school details is : ", this.props);
    }
    render() {
        const details = this.props.ReducerLink.currentLink;
        const individualSchool = details[0];
        return (
            <div className="school-details">
                {/**
                 * if details length is not equal to zero, render the selected school else no sch is selected
                 */
                details.length !== 0 ? (
                    <Fragment>
                        <li
                            key={individualSchool.schoolid}
                            className="school_details--text-image"
                        >
                            <img
                                src={Logo}
                                alt="Random Figure"
                                className="each-school__image school__image--mod"
                            />
                            <div className="school__details">
                                <h2 className="school__details-name">
                                    School Name : {individualSchool.schoolName}
                                </h2>
                                <h3 className="school_details-contact">
                                    School Contact : {individualSchool.phone}
                                </h3>
                                <div className="school__details-address">
                                    <span>
                                        Street :{" "}
                                        {individualSchool.address.street}
                                    </span>
                                    <span>
                                        City : {individualSchool.address.city}{" "}
                                    </span>
                                    <span>
                                        State :{" "}
                                        {individualSchool.address.stateFull}{" "}
                                    </span>
                                    <span>
                                        ZIP : {individualSchool.address.zip}{" "}
                                    </span>
                                </div>
                            </div>
                        </li>
                        <MapContainer
                            lat={individualSchool.address.latLong.latitude}
                            lng={individualSchool.address.latLong.longitude}
                        />
                    </Fragment>
                ) : (
                    <p>No school selected</p>
                )}
            </div>
        );
    }
}
const mapStateToPros = state => {
    return { ReducerLink: state.ReducerLink };
};
export default connect(mapStateToPros, {})(SchoolDetails);
