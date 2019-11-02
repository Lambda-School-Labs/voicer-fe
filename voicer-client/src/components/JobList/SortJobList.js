import React, { Component } from 'react';
import JobList from './JobList';
import styled from 'styled-components';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// Styling
const MainDiv = styled.div`
  width: 50%;
  margin: 10px auto;
  display: flex;
  justify-content: space-evenly;
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
class SortJobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: "",
            toggleMenu: true
        }
    }

    toggleMenu = () => this.setState({
        toggleMenuValue: !this.state.toggleMenuValue
    })

    setSort = type => this.setState({
        sortBy: type
    })


render() {
    return (
        <MainDiv>
           <Dropdown isOpen={this.state.toggleMenuValue} toggle={this.toggleMenu}>
                <DropdownToggle caret>Sort by</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => this.setSort("alpha")}>Alphabetical</DropdownItem>
                    <DropdownItem onClick={() => this.setSort("num")}>Numeric</DropdownItem>
                    <DropdownItem onClick={() => this.setSort("reverseAlpha")}>Reverse Alphabetical</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            {(_ => {
                let sortedJobs = [...sampleData]

                switch(this.state.sortBy) {
                    case 'alpha':
                        // return <div>Showing Alphabetical</div>;
                        sortedJobs.sort((x,y) => (y.jobTitle > x.jobTitle) ? -1 : 1);
                        return <JobList jobs={sortedJobs}/>
                    case 'num':
                        // return <div>Showing Numeric</div>;
                        sortedJobs.sort((x,y) => y.clientId - x.clientId);
                        return <JobList jobs={sortedJobs}/>
                    case 'reverseAlpha':
                        // return <div>Showing Reverse Alphabetical</div>;
                        sortedJobs.sort((x,y) => (y.jobTitle > x.jobTitle) ? -1 : 1).reverse();
                        return <JobList jobs={sortedJobs}/>
                    default:
                        return <div>Showing Default</div>;
                }
            })()}
            </MainDiv>
        );
    };
};

export default SortJobList;