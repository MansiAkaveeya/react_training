import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                    gender: ''
                }}

                validationSchema={Yup.object().shape({
                    firstName: Yup.string().required("First Name is required!"),
                    lastName: Yup.string().required('Last name is required'),
                    password: Yup.string().min(6, "Password length must be 6 char. long").required("Password is required"),
                    confirmPassword: Yup.string().
                        oneOf([Yup.ref('password')], 'Password must match').
                        required('Password is required'),
                    email: Yup.string().email("Email is invalid").required("Email is required"),
                    acceptTandC: Yup.bool().oneOf([true], "You must accept T&C")


                })}
                onSubmit={result => { alert(JSON.stringify(result)) }}
            >

                {({ errors, touched }) => (
                    <Form>
                        <div className="form-group">
                            <div className="form-group col">
                                <label>First Name</label>
                                <Field name="firstName" type="text" className={"form-control " + (errors.firstName && touched.firstName ? 'is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col">
                                <label>Last Name</label>
                                <Field name="lastName" type="text" className={"form-control " + (errors.lastName && touched.lastName ? 'is-invalid' : '')} />
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col">
                                <label>Password</label>
                                <Field name="password" type="password" className={"form-control " + (errors.password && touched.password ? 'is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col">
                                <label>Confirm password</label>
                                <Field name="confirmPassword" type="password" className={"form-control " + (errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : '')} />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col">
                                <label>email</label>
                                <Field name="email" type="text" className={"form-control " + (errors.email && touched.email ? 'is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group form-check">
                                <Field type="checkbox" name="acceptTandC" className={'form-check-input ' + (errors.acceptTandC && touched.acceptTandC ? ' is-invalid' : '')} />
                                <label htmlFor="acceptTandC" className="form-check-label">Accept Terms & Conditions</label>
                                <ErrorMessage name="acceptTandC" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group form-check ">
                                <label>Gender</label>
                                <div>
                                <Field type="radio" name="gender" value="male" className={'form-check-input ' + (errors.gender && touched.gender ? ' is-invalid' : '')} />
                                <label>Male</label></div>
                                <Field type="radio" name="gender" value="female" className={'form-check-input ' + (errors.gender && touched.gender ? ' is-invalid' : '')} />
                                <label>Female</label>
                                <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                            </div>
                            
                           
                            <div className="form-group">
                                <input type="submit" value="submit" />
                                <input type="reset" value="reset" />
                            </div>

                        </div>
                    </Form>
                )}

            </Formik>
        );
    }
}

RegistrationForm.propTypes = {

};

export default RegistrationForm;
