import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {loginThunkCreator} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';

type FormDataType = {
    email: string
    password: string
    rememberMy: boolean
}
type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType ={
    login: (email: string, password: string, rememberMe: boolean) => void
}
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMy'} component={Input}/>remember my
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMy)
    }
    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,

})

export default connect(mapStateToProps,{login: loginThunkCreator,})(Login)
