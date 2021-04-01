import React from "react"
import "./style.css"

function EmployeeRow(props) {
    return(
    <tbody>
        <tr className = "employee-row">
        <th><img src={props.image} className = "avatar" /></th>
        <th>{props.name}</th>
        <th>{props.phone}</th>
        <th>{props.email}</th>
        <th>{props.dob}</th>
        </tr>
    </tbody>
    )
}

export default EmployeeRow;