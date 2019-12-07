import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { apiResponse, currentLink } from "../../redux/actions/Actions";
import { connect } from "react-redux";
import axios from "axios";
import stateJson from "../../state.json";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

import "./Actions.css";
import { MenuItem } from "@material-ui/core";

export class Actions extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { searchText: "", stateSelected: "Alabama" };
    }

    handleChange = event => {
        const searchText = event.target.value.trim();
        this.setState({ searchText: searchText });
    };
    handleSelectChange = event => {
        const stateSelected = event.target.value;
        this.setState({ stateSelected: stateSelected });
    };

    handleSearch = event => {
        event.preventDefault();
        const searchText = this.state.searchText;
        const stateSelected = this.state.stateSelected;
        let stateabbreviations;
        stateJson.filter(item => {
            if (item.name === stateSelected) {
                stateabbreviations = item.abbreviation;
            }
            return 0;
        });
        const url = `https://api.schooldigger.com/v1.2/schools?st=${stateabbreviations}&q=${searchText}&appID=${process.env.REACT_APP_AppID}&appKey=${process.env.REACT_APP_APIKey}`;
        const apiValue = async () => {
            const options = {
                url: url,
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
    };

    render() {
        // const classes = useStyles();
        return (
            <div className="action-field">
                <form action="#" onSubmit={this.handleSearch} className="form">
                    <FormControl variant="filled" className="form__formcontrol">
                        <InputLabel id="demo-simple-select-outlined-label">
                            State
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            name="stateabbreviations"
                            onChange={this.handleSelectChange}
                            value={this.state.stateSelected}
                        >
                            {stateJson.map((item, index) => {
                                return (
                                    <MenuItem value={item.name} key={index}>
                                        {item.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                    <input
                        type="search"
                        name="search"
                        id="search"
                        className="form__search-field"
                        onChange={this.handleChange}
                    />
                    <button
                        onClick={this.handleSearch}
                        className="form__search-button"
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    apiResponses: apiResponse,
    currentLink: currentLink
};
export default connect(null, mapDispatchToProps)(Actions);
