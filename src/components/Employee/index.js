import React, { Component } from "react";
import "./style.css";
import Search from "../Search";
import Table from "../Table";
import API from "../../utils/API";
import moment from "moment";

class EmployeeMain extends Component {
    state = {
        search: "",
        employees: [],
        filteredEmp: [],
    };

    componentDidMount() {
        API.getEmps()
            .then((res) =>
                this.setState({
                    employees: res.data.results,
                    filteredEmp: res.data.results
                })
            )
            .catch(err => console.log(err));
    }

    handleInputChange = (e) => {
        const value = e.target.value;
        this.setState({ search: value });
        this.filterEmp(value.toLowerCase().trim());
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
    }







    sortby





}