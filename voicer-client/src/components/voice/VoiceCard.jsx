import React, { useState, useEffect } from "react"

import AudioPlayer from "../audio/AudioPlayer"

import useStyles from './VoiceStyle'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Rating from '@material-ui/lab/Rating'

const VoiceCard = ({ data, token, bio, currentDisplayName }) => {

	const classes = useStyles()

	return (
		<Card className={classes.profileCard}>
			<div 
			className={classes.conWrap}
			>
				<div className={classes.profileRow}>
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

							{bio && <button>Invite to Apply</button>}
						</CardContent>
					</CardContent>

					<CardContent className={classes.contain}>
						{data.samples[0] !== undefined && (
							<AudioPlayer samples={data.samples} />
						)}
					</CardContent>

				</div>

				{bio && (
					<Card className={classes.bio}>
						<Typography>
							{data.bio}
						</Typography>
					</Card>
				)}
			</div>

		</Card>
	)
}

export default VoiceCard