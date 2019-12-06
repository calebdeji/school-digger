import React, { Component, Fragment } from "react";
import dummyImage from "../../logo.png";

export default class SchoolTemplate extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <Fragment>
                <img
                    src={dummyImage}
                    alt="A dummy figure"
                    className="each-school__image"
                />
                <div className="each-school__description">
                    <p className="each-school__name">
                        {this.props.item.schoolName}
                    </p>
                    <p className="each-school__address">
                        {this.props.item.address.html}
                    </p>
                    <p className="each-school__level">
                        {this.props.item.schoolLevel} Level
                    </p>
                </div>
            </Fragment>
        );
    }
}
