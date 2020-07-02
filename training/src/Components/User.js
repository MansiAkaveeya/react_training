import React from 'react';
import Table from 'react-bootstrap/Table'
const User = (props) => {
    debugger
    return (
        <div>
            <h6>(day-12 HOC)</h6>

            <Table striped bordered hover responsive variant="dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
                {props.users.map(item => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.age}</td>
                        <td>{item.city}</td>
                    </tr>
                ))}
            </Table>
        </div>
    )
}

export default User;