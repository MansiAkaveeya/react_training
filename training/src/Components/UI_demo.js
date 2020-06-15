import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

var eventVariable;
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 1, Name: 'Mansi Akaveeya', Age: '22', City: 'Rajkot' },
                { id: 2, Name: 'Janvi Sagathiya', Age: '21', City: 'Ahemdabad' },
                { id: 3, Name: 'Kiran Vaghasiya' , Age: '24', City: 'Vadodara'}
            ]
        };
    }
    handleClick(user) {
        eventVariable = <InformationOfUser users={user} />
        this.setState({ activeuserId: user.id })
    }
    render() {
        return (
            <div>
                {this.state.users.map((user) =>
                    <TotalUser key={user.id} Details={user} handleClick={() => this.handleClick(user)} />)}
                {this.state.activeuserId ? eventVariable : null}
            </div>
        );
    }
}
function TotalUser(props) {
    return (
        <div>
            <h5 className="DemoStyle">{props.Details.Name}
            <Button variant="warning" onClick={props.handleClick} >Click to see more.</Button></h5>
        </div>
    )
}
function InformationOfUser(props) {
    return (
        <div className="userDetailsDisplay">
            <Card border="warning" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>
                        <p>Name: {props.users.Name}</p>
                        <p>Age: {props.users.Age}</p>
                        <p>City: {props.users.City}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}


export default List;
