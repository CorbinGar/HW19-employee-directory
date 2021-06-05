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
        sortedEmployees: [],
    };

    componentDidMount() {
        API.getEmps()
            .then((res) =>
                this.setState({
                    employees: res.data.results,
                    sortedEmployees: res.data.results
                })
            )
            .catch(err => console.log(err));
    }

    handleInputChange = (e) => {
        const value = e.target.value;
        this.setState({ search: value });
        this.sortedEmployees(value.toLowerCase().trim());
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
    }


    sortbylastname = (e) => {
        this.setState({
            sortedEmployees: this.state.sortedEmployees.sort(
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
            filteredEmp: this.state.sortedEmployees.sort(
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
            sortedEmployees: this.state.sortedEmployees.sort(
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


    filter = (input) => {
        if (input) {
            this.setState({
                filteredEmp: this.state.employees.filter((employee) => {
                    return (
                        employee.name.first.includes(input) ||
                        employee.name.last.includes(input) ||
                        employee.phone.includes(input) ||
                        employee.email.includes(input) ||
                        moment(employee.registered.date).format("MM/DD/YYYY").includes(input)
                    );
                }),
            });
        } else {
            this.setState({ sortedEmployees: this.state.employees });
        }
    };

    render() {
        return (
            <div className="container">
                <Search
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <Table
                    state={this.state}
                    filterEmp={this.filterEmp}
                    sortEmpFirst={this.sortEmpFirst}
                    sortEmpLast={this.sortEmpLast}
                    sortEmpDate={this.sortEmpDate}
                    sortEmpEmail={this.sortEmpEmail}
                    sortEmpPhone={this.sortEmpPhone}

                />
            </div>
        );
    }


}

export default Employee;