import React, { Component, Fragment } from "react";
import MarkDown from "react-markdown";
import dummyImage from "../../logo.png";

export default class SchoolTemplate extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        const {
            schoolName,
            schoolLevel,
            address: { html },
        } = this.props.item;
        return (
            <Fragment>
                <img src={dummyImage} alt='A dummy figure' className='each-school__image' />
                <div className='each-school__description'>
                    <MarkDown source={schoolName} className='each-school__name' />
                    <p className='each-school__address'>{html}</p>
                    <p className='each-school__level'>{schoolLevel} Level</p>
                </div>
            </Fragment>
        );
    }
}
