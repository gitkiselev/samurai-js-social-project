import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls.js';
import {required} from '../../utils/validators/validators.js';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit} >
                <div>
                    <Field placeholder={'email'} name={'email'}
                    validate={[required]}
                    component={Input} />
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'}
                    validate={[required]}
                    type={'password'}
                    component={Input} />
                </div>
                <div>
                    <Field component={Input} name={'rememberMe'} type={'checkbox'} />remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
          
        
}
const LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
export default connect(null, {login})(Login);