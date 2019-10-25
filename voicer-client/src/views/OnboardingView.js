import React, { useState } from 'react';
import Login from '../components/Login/Login';
import Register from '../components/Register';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

const OnboardingView = () => {
    const [activeTab, setActiveTab] = useState('1');
  
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return (
    <div>
        <Nav tabs>
            <NavItem>
                <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
                >
                    Login
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
                >
                    Register
                </NavLink>
            </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <Login />
            </TabPane>
            <TabPane tabId="2">
                <Register />
            </TabPane>
        </TabContent>
    </div>
    );
}

export default OnboardingView;