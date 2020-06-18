import React from 'react'


const Logout = () => {
  return(
    <div
      onClick={(e) => {
        e.preventDefault()
        localStorage.removeItem("token")
        window.location.href = "/"
      }}
    >
      Logout
    </div>
  )
}

export default Logout