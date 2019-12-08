import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    componentDidMount() {
        console.log("props for map is : ", this.props);
        console.log("api key is ", process.env.REACT_APP_GoogleAPIKey);
    }
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={{ width: "100%", height: "100%", position: "static" }}
                containerStyle={{
                    width: "100%",
                    height: "500px",
                    position: "static",
                    margin: "auto"
                }}
                initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
            />
        );
    }
}
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GoogleAPIKey
})(MapContainer);
