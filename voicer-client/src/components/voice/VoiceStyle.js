import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	voiceCard: {
		width: theme.breakpoints.width('md'),
		minWidth: theme.breakpoints.width('sm'),
		display: 'flex',
	},
}))

export default useStyles