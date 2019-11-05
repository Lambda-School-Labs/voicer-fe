import React from 'react';
import { Card, Button, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import styled from 'styled-components'

// Styling
const StyledCard = styled(Card)`
  width: 90%;
  border: 1px solid red;
  padding: 10px;
  margin: 10px 0;
  min-height: 100px;
`

const StyledButton = styled(Button)`
  margin: 0 10px;
`

const StyledCardBody = styled(CardBody)`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const StyledButtonDiv = styled.div`
  border: 1px solid red;
  padding: 10px;
  margin-left: auto;
`

// Component
const JobListCard = props => {

    return (
        <StyledCard>
            <StyledCardBody>
                <CardTitle>{props.jobData.jobTitle}</CardTitle>
                <CardSubtitle>{props.jobData.clientId}</CardSubtitle>
                <CardText>{props.jobData.jobDescription}</CardText>
                <StyledButtonDiv>
                    <StyledButton>Click me!</StyledButton>
                    <StyledButton>Or me!</StyledButton>
                </StyledButtonDiv>
            </StyledCardBody>
        </StyledCard>
    );
};

export default JobListCard;