import React from "react";
import "./style.css";
import EmployeeRow from "../EmployeeRow";

function renderRow(employees) {
  return <EmployeeRow 
  key = {employees.email}
  name = {employees.name.first + " " + employees.name.last}
  image = {employees.picture.thumbnail}
  phone = {employees.phone}
  email ={employees.email}
  dob ={employees.dob.date.slice(0,10)}
  />
}
function SearchResults(props) {
  return (
    <table className = "employee-table">
        <thead>
  <tr>
    <th>Image</th>
    <th onClick={props.sortResults}>Name
    </th>
    <th onClick={props.sortResults}>Phone</th>
    <th onClick={props.sortResults}>Email</th>
    <th onClick={props.sortResults} >DOB</th>
  </tr>
  </thead>
  {props.results.map(renderRow)}
</table>
  );
}

export default SearchResults;

