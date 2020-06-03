import React, { useState, useContext } from 'react'
import LogRegFields from "./login/logRegFields"
import { DataContext } from "../../context/DataContext"
import { Link } from 'react-router-dom'

import Logout from '../navbar/Logout'

import useStyles from './NavBarStyle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Card from '@material-ui/core/Card'


const RenderMenu = ({ anchorEl, menuId, handleMenuClose }) => {
	const { token } = useContext(DataContext)
	const [loginRegister, setLoginRegister] = useState(false)
	const isMenuOpen = Boolean(anchorEl)
	
	const loginRegisterHandler = (e) => {
		e.preventDefault()
		setLoginRegister(!loginRegister)
  	}

  	const classes = useStyles()

	return (
		<Menu
			className={classes.menu}
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			{/* MARKETPLACE */}
				<MenuItem button component={Link} to={`/`} onClick={handleMenuClose}>
					Marketplace
				</MenuItem>

			{/* ALL USERS */}
				<MenuItem button component={Link} to={`/voice/`} onClick={handleMenuClose}>
					All Users
				</MenuItem>

			<hr />

			{token ? (
				<>
					{/* MY PROFILE */}
						<MenuItem button component={Link} to={`/voice/${token.display_name}`} onClick={handleMenuClose}>
							My Profile
						</MenuItem>

					

					{/* LOGOUT */}
					<MenuItem onClick={handleMenuClose}>
						<Logout />
					</MenuItem>
				</>
			) : (
				<LogRegFields
				register={loginRegister}
				loginRegisterHandler={loginRegisterHandler}
				setLoginRegister={setLoginRegister} />
			)}
		</Menu>
	)
}

export default RenderMenu