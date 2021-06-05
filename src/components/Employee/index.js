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


    sortbylastname = (e) => {
        this.setState({
            filteredEmp: this.state.filteredEmp.sort(
                (emp1, emp2) => {
                    if (emp1.name.last < emp2.name.last) {
                        return -1
                    } else if (emp1.name.last > emp2.name.last) {
                        return 1
                    } else { return 0 }
                }
            )
        })
    }

    sortbyfirstname = (e) => {
        this.setState({
            filteredEmp: this.state.filteredEmp.sort(
                (emp1, emp2) => {
                    if (emp1.name.first < emp2.name.first) {
                        return -1
                    } else if (emp1.name.first > emp2.name.first) {
                        return 1
                    } else { return 0 }
                }
            )
        })
    }


    sortEmpEmail = (e) => {
        this.setState({
            filteredEmp: this.state.filteredEmp.sort(
                (emp1, emp2) => {
                    if (emp1.email < emp2.email) {
                        return -1
                    } else if (emp1.email > emp2.email) {
                        return 1
                    } else { return 0 }
                }
            )
        })
    }

    sortEmpPhone = (e) => {
        this.setState({
            filteredEmp: this.state.filteredEmp.sort(
                (emp1, emp2) => {
                    if (emp1.phone < emp2.phone) {
                        return -1
                    } else if (emp1.phone > emp2.phone) {
                        return 1
                    } else { return 0 }
                }
            )
        })
    }

}

export default Employee;