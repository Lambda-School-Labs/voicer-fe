import React, { Component } from 'react';
import JobList from './JobList';
import styled from 'styled-components';
import { Input } from 'reactstrap';
import Fuse from "fuse.js";

// Styling
const MainDiv = styled.div`
  width: 50%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  padding: 20px;
`

// Sample Data
const sampleData = [
    {
        "clientId" : "1",
        "jobTitle" : "Cool guy",
        "jobDescription" : "I need a cool guy to do stuff"
    },
    {
        "clientId" : "2",
        "jobTitle" : "Alright bro",
        "jobDescription" : "I need a alright bro to do stuff"
    },
    {
        "clientId" : "3",
        "jobTitle" : "Cold fellow",
        "jobDescription" : "I need a cold fellow to do stuff"
    },
    {
        "clientId" : "4",
        "jobTitle" : "Fire bruh",
        "jobDescription" : "I need a fire bruh to do stuff"
    },
    {
        "clientId" : "5",
        "jobTitle" : "Ice bruh",
        "jobDescription" : "I need a ice bruh to do stuff"
    },
    {
        "clientId" : "6",
        "jobTitle" : "Electric bruh",
        "jobDescription" : "I need a electric bruh to do stuff"
    },
    {
        "clientId" : "7",
        "jobTitle" : "Earth bruh",
        "jobDescription" : "I need a earth bruh to do stuff"
    }
];

// Component
class SearchJobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBy: "",
            toggleMenu: true
        }
    }

    toggleMenu = () => this.setState({
        toggleMenuValue: !this.state.toggleMenuValue
    })

    setSearch = word => this.setState({
        searchBy: word
    })

    render() {

        const fuseOptions = {
            shouldSort: true,
            //Threshold is search accuracy
            threshold: 0.4,
            location: 0,
            distance: 50,
            maxPatternLength: 12,
            minMatchCharLength: 3,
            // Keys in object to searched for keywords
            keys: ['jobTitle', 'jobDescription'],
        };

        // Setup fuse using sampleData and fuseOptions as search options
        const fuse = new Fuse(sampleData, fuseOptions)
        // Initiate a search and return matching data to searchedJobs
        const searchedJobs = fuse.search(this.state.searchBy)

        return (
            <MainDiv>
            {/* Set value to search for */}
            <Input placeholder="Search" value={this.state.searchBy} onChange={(e) => this.setSearch(`${e.target.value}`)} />
            {/* Render data returned */}
            <JobList jobs={searchedJobs}/>
            </MainDiv>
        );
    };
};

export default SearchJobList;