import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	voiceCard: {
		width: theme.breakpoints.width('md'),
		minWidth: theme.breakpoints.width('sm'),
		margin: theme.spacing(4),
	},
	voiceAvatar: {
		width: theme.spacing(21),
		height: theme.spacing(21),
	},
}))

export default useStyles