import React, { Component } from "react";

export default class SchoolDetails extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    // console.log("props passed : ", this.props);
  }

  render() {
    return <p>Hello Details</p>;
  }
}
