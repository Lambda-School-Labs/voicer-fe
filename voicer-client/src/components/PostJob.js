import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {postJob} from '../actions';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import axios from 'axios';

class PostJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitle: "",
            jobDescription: "",
            userId: jwt.decode(localStorage.getItem("token")).userId
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async event => {
        event.preventDefault()

        const client = await axios.get(`https://voicer-lambda-app-staging.herokuapp.com/api/clients/${this.state.userId}`)

        this.props.postJob({
            jobTitle: this.state.jobTitle,
            jobDescription: this.state.jobDescription,
            clientId: client.data[0].clientId
        })
    }

    render() {
        return(
            <div className="PostJob">
                <h1>Post a Job</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input type="text" name="jobTitle" placeholder="Enter a Title" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input type="textarea" name="jobDescription" placeholder="Describe the Job" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button>Post Job</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

export default connect(
    mapStateToProps,
    { postJob }
)(PostJob);