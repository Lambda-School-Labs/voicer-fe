import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';

class Login extends Component {
    state = {
        creds: {
            email: '',
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
    
        const { email, password } = this.state.creds
    
        this.PaymentResponse.login({
            email: email,
            password: password
        })
        .then(() => this.props.history.push('/voicer'))
        .catch(err => console.log(err))
    }

    render() {
        const { email, password } = this.state.creds;

        return (
            <div className="loginPage">
                <div className="loginImg">
                    <form className="loginForm" onSubmit={this.submitHandler}>
                        <input
                            className="input"
                            type="email"
                            value={email}
                            placeholder="Email"
                            name="email"
                            onChange={this.changeHandler}
                        />
                        <input
                            className="input"
                            type="text"
                            value={password}
                            placeholder="Password"
                            name="password"
                            onChange={this.changeHandler}
                        />
                        <button className="loginButton" type="submit">Log In</button>
                    </form>
                </div>
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
