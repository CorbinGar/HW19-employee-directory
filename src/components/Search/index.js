import React from "react";
import "./style.css";

function Search(props) {
    return (
        <div className="container">
            <div className="mb-3">
                <form className="form-inline" onSubmit={props.handleFormSubmit}>
                    <input
                        value={props.value}
                        onChange={props.handleInputChange}
                        type="search"
                        className="form-control mt-2"
                        id="searchInput"
                        placeholder="Search Employees">
                    </input>
                </form>
            </div>
        </div>
    )
}

export default Search;