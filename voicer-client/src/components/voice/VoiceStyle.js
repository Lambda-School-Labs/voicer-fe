import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.primary.dark,
    	width: theme.breakpoints.width('sm'),
	},
	voicePage: {
		padding: theme.spacing(12, 0, 6),
		backgroundColor: theme.palette.primary.dark,
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	profileCard: {
		width: theme.breakpoints.width('sm'),
		margin: theme.spacing(3),
		backgroundColor: theme.palette.primary.light,
		display: 'flex',
	},
	crudCard: {
		width: theme.breakpoints.width('sm'),
		backgroundColor: theme.palette.primary.light,
		display: 'flex',
	},
	profileRow: {
		width: '100%',
		display: 'flex',
		// alignItems: 'center',
		justifyContent: 'space-between',
	},
	profileHeader: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	profileAvatar: {
		width: theme.spacing(21),
		height: theme.spacing(21),
	},
	profileInfo: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
		alignItems: 'center',
	},
	contain: {
		width: '100%',
	},
	displayName: {
		color: theme.palette.primary.dark,
		fontSize: theme.spacing(3),
		fontWeight: '500',
	},
	sampleCard: {
		height: '100%',
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.text.primary,
		display: 'flex',
		flexDirection: 'column',
	},
	sampleTitle: {
		textAlign: 'center',
		padding: theme.spacing(1, 2),
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.secondary.main,
		overflow: 'visible',
	},
	column: {
		display: 'flex',
		flexDirection: 'column',
		alignSelf: '',
		alignContent: 'space-between',
		justifyContent: '',
	},
	tags: {
		height: '100%',
		margin: theme.spacing(1),
		display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
	},
	chip: {
		color: theme.palette.primary.dark,
		fontSize: theme.spacing(2),
		fontWeight: '500',
		margin: theme.spacing(1),
	},
	controls: {
		display: 'flex',
		flexDirection: 'column',
	},
	player: {
		width: '93%',
		height: theme.spacing(4),
	},
	stepper: {
		width: '100%',
	},
	button: {
		color: 'rgba(255, 167, 112, 1)',
		'&$disabled': {
			color: 'rgba(255, 167, 112, 0.5)',
		},
	},
	disabled: {},
}))

export default useStyles