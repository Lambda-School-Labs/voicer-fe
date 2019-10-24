import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register, login } from '../actions';

import './Register.css';

class Register extends Component {
    state = {
        creds: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            userType: ''
        }
    };

    changeHandler = e => {
        this.setState({
            creds: {
                ...this.state.creds,
                [e.target.name]: e.target.value
            }
        })
    }

    submitHandler = e => {
        e.preventDefault();

        const {
            firstName,
            lastName,
            email,
            password,
            userType
        } = this.state.creds;

        this.props.register({
            firstName,
            lastName,
            email,
            password,
            userType
        })
        .then(() => {
            const creds = { email, password };
            this.props.login(creds)
        })
        .then(() => localStorage.setItem('user', this.props.id))
        .then(() => this.props.history.push('/voicer'))
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div className="registerPage">
                <form className="registerForm" onSubmit={this.submitHandler}>
                    <input
                        className="input"
                        type="text"
                        name="firstName"
                        value={this.state.creds.firstName}
                        placeholder="First Name"
                        onChange={this.changeHandler}
                    />
                    <input
                        className="input"
                        type="text"
                        name="lastName"
                        value={this.state.creds.lastName}
                        placeholder="Last Name"
                        onChange={this.changeHandler}
                    />
                    <input
                        className="input"
                        type="email"
                        name="email"
                        value={this.state.creds.email}
                        placeholder="Email"
                        onChange={this.changeHandler}
                    />
                    <input
                        className="input"
                        type="text"
                        name="password"
                        value={this.state.creds.password}
                        placeholder="Password"
                        onChange={this.changeHandler}
                    />
                    <input
                        className="input"
                        type="text"
                        name="userType"
                        value={this.state.creds.userType}
                        placeholder="Client or Talent"
                        onChange={this.changeHandler}
                    />
                    <button className="registerButton" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    id: state.registerReducer.id
});

export default connect(
    mapStateToProps,
    { register, login }
)(Register);