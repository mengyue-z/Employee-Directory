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
    <th onClick={props. sortResultsbyName}>Name  {props.sortStatus =="ASC" ? "⬆" : "⬇" }
    </th>
    <th onClick={props.sortResultsbyPhone}>Phone  {props.sortStatus =="ASC" ? "⬆" : "⬇" }</th>
    <th onClick={props.sortResultsbyName}>Email  {props.sortStatus =="ASC" ? "⬆" : "⬇" }</th>
    <th onClick={props.sortResultsbyDob} >DOB  {props.sortStatus =="ASC" ? "⬆" : "⬇" }</th>
  </tr>
  </thead>
  {props.results.map(renderRow)}
</table>
  );
}

export default SearchResults;

