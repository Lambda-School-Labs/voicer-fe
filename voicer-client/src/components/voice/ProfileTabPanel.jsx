import React, { useState, useContext } from 'react'
import { DataContext } from "../../context/DataContext"

import AudioPlayer from "../audio/AudioPlayer"
import AudioUploader from '../audio/AudioUploader'
import AddJobForm from '../addJobForm/AddJobForm'

import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'

import { useTheme } from '@material-ui/core/styles'
import useStyles from './VoiceStyle'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Rating from '@material-ui/lab/Rating'

function TabPanel(props) {
  const { children, value, index, ...other } = props
  const classes = useStyles()
  return (
    <Card className={classes.crudCard}>
      {children}
    </Card>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

export default function FullWidthTabs({ key, data, bio, currentDisplayName }) {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const { token } = useContext(DataContext)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Samples" {...a11yProps(1)} />
          <Tab label="Jobs" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* TAB PANEL ONE */}
        <TabPanel value={value} index={0} dir={theme.direction}>
          <>
            <CardContent className={classes.profileRow}>
              <CardContent className={classes.profileHeader}>
                <Avatar
                  className={classes.profileAvatar}
                  alt={data.display_name}
                  src={data.avatar}
                />

                <CardContent className={classes.profileInfo}>

                  <Chip 
                    label={data.display_name}
                    color="secondary"
                    classes={{
                      label: classes.displayName
                    }}
                  />

                  <Rating name="read-only" value={data.rating} readOnly />

                  <Typography variant="body2" color="secondary">
                    Jobs Completed: {data.jobsCompleted}
                  </Typography>
                </CardContent>
              </CardContent>

              {/* Edit Fields Go Here */}

            </CardContent>

            {bio && (
              <Card className="profileBio">
                <Typography>
                  {data.bio}
                </Typography>
              </Card>
            )}
          </>
        </TabPanel>


        {/* TAB PANEL TWO */}
        <TabPanel value={value} index={1} dir={theme.direction}>
          <AudioUploader />
          <CardContent className={classes.contain}>
            {data.samples[0] !== undefined && (
              <AudioPlayer samples={data.samples} />
            )}
          </CardContent>
        </TabPanel>

        {/* TAB PANEL THREE */}
        <TabPanel value={value} index={2} dir={theme.direction}>
          <AddJobForm />
        </TabPanel>

      </SwipeableViews>
    </div>
  )
}