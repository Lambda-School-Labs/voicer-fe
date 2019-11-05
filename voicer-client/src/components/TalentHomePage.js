import React from 'react';
import JobList from './JobList/JobList';

import { connect } from 'react-redux';
import { getJobs } from '../actions'

class TalentHomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.getJobs()
    }

    render() {
        return(
            <JobList jobs={this.props.jobs}/>
        )
    }
}

const mapStateToProps = state => ({
    jobs: state.getJobsReducer.jobs
})

export default connect(
    mapStateToProps,
    { getJobs }
)(TalentHomePage);