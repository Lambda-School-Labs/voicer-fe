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
			flexDirection: 'row',
		},
	},
	jobCard: {
		width: theme.breakpoints.width('sm'),
		minWidth: theme.breakpoints.width('sm'),
		margin: theme.spacing(3),
		padding: theme.spacing(2),
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.text.primary,
		display: 'flex',
		flexDirection: 'column',
	},
	jobTitle: {
		textAlign: 'center',
		marginBottom: theme.spacing(2),
		padding: theme.spacing(1, 2),
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.primary.dark,
	},
	midCard: {
		backgroundColor: theme.palette.primary.main,
	},
	jobBody: {
		display: 'flex',
		flexDirection: 'row-reverse',
		alignContent: 'center',
		justifyContent: 'space-between',
	},
	jobImage: {
		marginRight: theme.spacing(1),
		borderRadius: '50%',
	},
	jobInfo: {
		margin: theme.spacing(3, 0, 0 , 4),
		color: theme.palette.common.white,
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
	},
	jobDescription: {
		margin: theme.spacing(0, 2, 2),
		padding: theme.spacing(2, 3),
		color: theme.palette.common.white,
		backgroundColor: theme.palette.primary.dark,
		borderRadius: theme.shape.borderRadius,	
	},
}))

export default useStyles