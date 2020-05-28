import React from 'react'

const NavItem = ({ children, icon, dropDown, setDropDown }) => {
    return (
      <li className="nav-item">
        <button
          className={dropDown ? "icon-button selected" : "icon-button"}
          onClick={(e) => {
            e.preventDefault()
            setDropDown(!dropDown)
          }}
        >
          {icon}
        </button>
        {dropDown && children}
      </li>
    )
  }

  export default NavItem