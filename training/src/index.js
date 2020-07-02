import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import RegistrationForm from './Components/RegistrationForm'

ReactDOM.render(<RegistrationForm/>,document.getElementById('root'));
=======
import DisplayComponent from '../src/Components/DisplayComponent'


ReactDOM.render(<DisplayComponent/>, document.getElementById('root'));
>>>>>>> ac3d188a37bbb023ee8833cca73042b0b8bf3b34

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
