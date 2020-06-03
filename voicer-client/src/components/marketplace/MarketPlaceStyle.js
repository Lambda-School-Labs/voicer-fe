import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	marketplace: {
		padding: theme.spacing(12, 0, 6),
		backgroundColor: theme.palette.primary.dark,
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.up('lg')]: {
			// maxWidth: theme.breakpoints.width('lg'),
			flexDirection: 'row',
		},
	},
	jobCard: {
		maxWidth: theme.breakpoints.width('sm'),
		margin: theme.spacing(3),
		padding: theme.spacing(2),
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.text.primary,
		display: 'flex',
		flexDirection: 'column',
	},
	jobTitle: {
		textAlign: 'center',
		marginBottom: theme.spacing(3),
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.primary.dark,
	},
	jobBody: {
		display: 'flex',
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
	},
	jobImage: {
		marginRight: theme.spacing(4),
		borderRadius: '50%',
	},
	jobInfo: {
		marginLeft: theme.spacing(4),
	},
	jobDescription: {
		margin: theme.spacing(3),
		padding: theme.spacing(0, 3),
		color: theme.palette.common.white,
		backgroundColor: theme.palette.primary.main,
		borderRadius: theme.shape.borderRadius,	
	},
	pTag: {
		
	},
}))

export default useStyles