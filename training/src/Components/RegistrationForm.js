import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Displaydata(props) {
    const result = props.data.result;
    return (
        <div className="d-flex justify-content-center">
            <div>
                <Card bg="dark" text="white" style={{ width: '18rem' }}>
                    <Card.Header>User Information</Card.Header>
                    <Card.Body>
                        <Card.Title>{result.firstName} {result.lastName}</Card.Title>
                        <Card.Text>
                            <p>Password : {result.password}</p>
                            <p>Email : {result.email}</p>
                            <p>Gender : {result.gender}</p>
                            <p>Department : {result.department}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            isCorrect: false
        };
    }
    render() {
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    password: '',
                    confirmPassword: '',
                    acceptTandC: false,
                    email: '',
                    gender: 'male',
                    department: '.NET'
                }}

                validationSchema={Yup.object().shape({
                    firstName: Yup.string().required("First Name is required!"),
                    lastName: Yup.string().required('Last name is required'),
                    password: Yup.string().min(6, "Password length must be 6 char. long").required("Password is required"),
                    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password must match').required('Password is required'),
                    email: Yup.string().email("Email is invalid").required("Email is required"),
                    acceptTandC: Yup.bool().oneOf([true], "You must accept T&C")
                })}
                onSubmit={result => { this.setState({ result: result, isCorrect: true }) }}
            >
                {({ errors, touched }) => (
                    <div className="container ">
                        <div className="row">
                            <div className=" col-md-6 col-sm-12">
                                <Form className="bg-light p-2">
                                    <div className="form-group m-0">
                                        <div className="form-group col m-0">
                                            <label>First Name : </label>
                                            <Field name="firstName" type="text" className={"form-control " + (errors.firstName && touched.firstName ? 'is-invalid' : '')} />
                                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group col m-0">
                                            <label>Last Name : </label>
                                            <Field name="lastName" type="text" className={"form-control " + (errors.lastName && touched.lastName ? 'is-invalid' : '')} />
                                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group col m-0">
                                            <label>Password : </label>
                                            <Field name="password" type="password" className={"form-control " + (errors.password && touched.password ? 'is-invalid' : '')} />
                                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group col m-0">
                                            <label>Confirm password : </label>
                                            <Field name="confirmPassword" type="password" className={"form-control " + (errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : '')} />
                                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group col m-0">
                                            <label>Email : </label>
                                            <Field name="email" type="text" className={"form-control " + (errors.email && touched.email ? 'is-invalid' : '')} />
                                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group form-check col m-0">
                                            <label>Gender : </label>
                                            <div className="col">
                                                <Field type="radio" name="gender" value="male" className={'form-check-input ' + (errors.gender && touched.gender ? ' is-invalid' : '')} />
                                                <label>Male</label>
                                            </div>
                                            <div className="col">
                                                <Field type="radio" name="gender" value="female" className={'form-check-input ' + (errors.gender && touched.gender ? ' is-invalid' : '')} />
                                                <label>Female</label>
                                            </div>
                                            <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group col m-0">
                                            <label for="department">Department : </label>
                                            <Field name="department" as="select" class="custom-select">
                                                <option value=".net">.NET</option>
                                                <option value="react">React</option>
                                                <option value="android">Android</option>
                                                <option value="ios">IOS</option>
                                            </Field>
                                        </div>
                                        <div className="form-group form-check col mt-1">
                                            <Field type="checkbox" name="acceptTandC" className={'form-check-input ' + (errors.acceptTandC && touched.acceptTandC ? ' is-invalid' : '')} />
                                            <label htmlFor="acceptTandC" className="form-check-label col">Accept Terms & Conditions</label>
                                            <ErrorMessage name="acceptTandC" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group col m-0">
                                            <Button variant="dark" type="submit" value="submit">Submit</Button>
                                            <Button variant="dark" type="reset" value="reset" className='ml-2'>Reset</Button>

                                        </div>
                                    </div>
                                </Form>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="mt-3">
                                    {
                                        (this.state.isCorrect) && <Displaydata data={this.state} />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Formik>
        );
    }
}

export default RegistrationForm;
