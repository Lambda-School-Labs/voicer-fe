import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Label } from 'reactstrap';
import { login } from '../../actions/login';
import NavBar from '../Home/NavBar';
import jwt from 'jsonwebtoken';
import './Login.css';

class Login extends Component {
    state = {
        creds: {
            username: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({
            creds: {
                ...this.state.creds,
                [e.target.name]: e.target.value
            }
        }); 
    }
    
    submitHandler = e => {
        e.preventDefault();
    
        const { username, password } = this.state.creds
    
        this.props.login({
            username: username,
            password: password
        })
        .then( res => this.props.history.push('/voicer'))
        .catch(err => console.log(err))
    }

    render() {
        const { username, password } = this.state.creds;

        return (
            <div className="loginPage">
                <NavBar className="navbar"/>
                <Form className="loginForm" onSubmit={this.submitHandler}>
                    <Label className="input-label" for="username">Username</Label>
                    <Input
                        className="input"
                        type="text"
                        value={username}
                        name="username"
                        onChange={this.changeHandler}
                    />
                    <Label className="input-label" for="password">Password</Label>
                    <Input
                        className="input"
                        type="password"
                        value={password}
                        name="password"
                        onChange={this.changeHandler}
                    />
                    <Button className="loginButton" type="submit">Log In</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loginReducer.logginIn,
    id: state.loginReducer.id
})

export default connect(
    mapStateToProps,
    { login }
)(Login)
