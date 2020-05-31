import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { CircularProgress } from "@material-ui/core";

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        console.log({ props: this.props });
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={{ width: "100%", height: "100%", position: "static" }}
                containerStyle={{
                    width: "100%",
                    height: "500px",
                    position: "static",
                    margin: "auto",
                }}
                initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
            >
                <Marker />
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GoogleAPIKey,
    LoadingContainer: CircularProgress,
})(MapContainer);
