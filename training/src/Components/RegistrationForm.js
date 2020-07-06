import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../App.css';
import Button from 'react-bootstrap/Button';

function Displaydata(props) {
    console.log(props.data.result);
//     const result = props.data.result;
//     return (
//         <div className="d-flex justify-content-center">
//             <div>
//                 <Card bg="dark" text="white" style={{ width: '18rem' }}>
//                     <Card.Header>User Information</Card.Header>
//                     <Card.Body>
//                         <Card.Title>{result.firstName} {result.lastName}</Card.Title>
//                         <Card.Text>
//                             <p>Password : {result.password}</p>
//                             <p>Email : {result.email}</p>
//                             <p>Gender : {result.gender}</p>
//                             <p>Department : {result.department}</p>
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>
//             </div>
//         </div>
//     )
 }
class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ModalText: '',
            result: '',
            isCorrect: false
        };
    }
    render() {
        return (
            <Formik
                initialValues={{
                    FirstName: '',
                    LastName: '',
                    email: '',
                    city: '',
                    state: '',
                    country:'',
                    department: '.NET',
                    gender: 'male'
                }}

                validationSchema={Yup.object().shape({
                    FirstName: Yup.string().required("First Name is required!"),
                    LastName: Yup.string().required('Last name is required'),
                    email: Yup.string().email("Email is invalid").required("Email is required"),
                    city: Yup.string().required('city is required'),
                    state: Yup.string().required("state is required"),
                    country: Yup.string().required("state is required"),
                    department: Yup.string().required("department is required")
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
                                            <Field name="FirstName" type="text" className={"form-control " + (errors.firstName && touched.firstName ? 'is-invalid' : '')} />
                                            <ErrorMessage name="FirstName" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group col m-0">
                                            <label>Last Name : </label>
                                            <Field name="LastName" type="text" className={"form-control " + (errors.lastName && touched.lastName ? 'is-invalid' : '')} />
                                            <ErrorMessage name="LastName" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group col m-0">
                                            <label>Email : </label>
                                            <Field name="email" type="text" className={"form-control " + (errors.email && touched.email ? 'is-invalid' : '')} />
                                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group col m-0">
                                            <label>city : </label>
                                            <Field name="city" type="text" className={"form-control " + (errors.city && touched.city ? 'is-invalid' : '')} />
                                            <ErrorMessage name="city" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group col m-0">
                                            <label>State : </label>
                                            <Field name="state" type="text" className={"form-control " + (errors.state && touched.state ? 'is-invalid' : '')} />
                                            <ErrorMessage name="state" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group col m-0">
                                            <label>country : </label>
                                            <Field name="country" type="text" className={"form-control " + (errors.country && touched.country ? 'is-invalid' : '')} />
                                            <ErrorMessage name="country" component="div" className="invalid-feedback" />
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
                                        {/* <div className="form-group form-check col mt-1">
                                            <Field type="checkbox" name="acceptTandC" className={'form-check-input ' + (errors.acceptTandC && touched.acceptTandC ? ' is-invalid' : '')} />
                                            <label htmlFor="acceptTandC" className="form-check-label col">Accept Terms & Conditions</label>
                                            <ErrorMessage name="acceptTandC" component="div" className="invalid-feedback" />
                                        </div> */}
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
