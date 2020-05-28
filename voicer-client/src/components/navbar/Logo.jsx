import React from 'react'
import { Link } from "react-router-dom"

import { ReactComponent as WhiteLogo } from "../../images/logo-white.svg"

import useStyles from './NavBarStyle'

const Logo = () => {

	const classes = useStyles()

	return (
		<Link to="/">
			<WhiteLogo className={classes.logo} />
		</Link>
	)
}

export default Logo
