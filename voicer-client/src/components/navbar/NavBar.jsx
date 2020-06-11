import React, { useState } from "react"

import RenderMobileMenu from './MobileMenu'
import RenderMenu from './Menu'
import Logo from "./Logo"

//Material UI imports
import useStyles from './NavBarStyle'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import MoreIcon from '@material-ui/icons/MoreVert'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

const NavBar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  
  const classes = useStyles()

  const menuId = 'primary-search-account-menu'
  const mobileMenuId = 'primary-search-account-menu-mobile'

  //MENU HANDLING
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)}

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)}

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()}

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)}


  return (
    <header>
      <AppBar position="fixed" className={classes.root}>
        <Container maxWidth='lg'>
          <Grid container spacing={0}>

            <Grid item xs={3} >
              <Logo />
            </Grid>

            <Grid item xs={3} className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Grid>
            
            <Grid item xs={5} />

            <Grid item xs={1} className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            
          </Grid>
        </Container>
      </AppBar>
      <RenderMenu
        anchorEl={anchorEl}
        menuId={menuId}
        handleMenuClose={handleMenuClose} />
      <RenderMobileMenu 
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen} />
    </header>
  )
}

export default NavBar