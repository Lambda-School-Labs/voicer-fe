// import React, { useState, useContext } from "react"
// import axios from "axios"
// import ValidateFields from "./validate.js"

// import { DataContext } from "../../../context/DataContext"
// import { useInputControl } from "../../../hooks/useInputControl.js"

// // import { Button, Card, InputGroup, FormControl } from "react-bootstrap"
// import useStyles from '../NavBarStyle'
// import { withStyles } from '@material-ui/core/styles'
// import FormControl from '@material-ui/core/FormControl'
// import TextField from '@material-ui/core/TextField'
// import Card from '@material-ui/core/Card'
// import CardContent from '@material-ui/core/CardContent'
// import Button from '@material-ui/core/Button'
// import MenuItem from '@material-ui/core/MenuItem'
// import { Typography } from "@material-ui/core"


// const LogRegFields = (props) => {
//   const classes = useStyles()
//   const { refreshAppHandler, url } = useContext(DataContext)

//   const [validate, setValidate] = useState([])
//   const [user, setUser] = useState({
//     password: "",
//     email: "",
//   })

//   const handleChange = (e) => {
//     e.preventDefault()
//     setUser({...user, [e.target.name]:e.target.value})
//   }

//   const isReg = props.register
//   let title = "Login"
//   let notTitle = "Register"

//   if (isReg) {
//     title = "Register"
//     notTitle = "Login"
//   }

//   const displayNameInput = useInputControl("")
//   const passwordInput = useInputControl("")
//   const firstNameInput = useInputControl("")
//   const lastNameInput = useInputControl("")
//   const emailInput = useInputControl("")

//   const userInfo = {
//     password: passwordInput.value,
//     email: emailInput.value,
//   }

//   if (isReg) {
//     userInfo.first_name = firstNameInput.value
//     userInfo.last_name = lastNameInput.value
//     userInfo.display_name = displayNameInput.value
//   }

//   const doSubmit = (e) => {
//     console.log(userInfo)
//     e.preventDefault()
//     const make = []
//     Object.keys(userInfo).forEach((key) => {
//       if (userInfo[key] === "") {
//         make.push(`Please fill out the ${key} field`)
//       }
//     })
//     if (make.length !== 0) {
//       setValidate(make)
//       return
//     } else {
//       axios
//         .post(
//           title === "Register"
//             ? `${url}/api/auth/register`
//             : `${url}/api/auth/login`,
//           userInfo
//         )
//         .then((res) => {
//           props.setDropDown(false)
//           localStorage.setItem("token", res.data.token)
//         })
//         .catch((err) => {})
//         .finally(() => {
//           props.setLoginRegister(false)
//           refreshAppHandler()
//         })
//     }
//   }

//   const ValidationTextField = withStyles({
//     root: {
//       '& input:valid + fieldset': {
//         borderColor: 'green',
//         borderWidth: 2,
//       },
//       '& input:invalid + fieldset': {
//         borderColor: 'red',
//         borderWidth: 2,
//       },
//       '& input:valid:focus + fieldset': {
//         borderLeftWidth: 6,
//       },
//     },
//   })(TextField)

//   console.log(props)

//   return (
//     <section>
//       <FormControl onSubmit={(e) => doSubmit(e)}>

//         <MenuItem bg="light">
//           <Typography>
//             {title}
//           </Typography>
//         </MenuItem>

//         <MenuItem classes={classes.regField}>
//           <ValidationTextField
//             // {...emailInput}
//             onChange={handleChange}
//             label="Email"
//             required
//             variant="outlined"
//             value={user.email}
//             // defaultValue={userInfo && userInfo.emailInput}
//             id="validation-outlined-input"
//           />
//         </MenuItem>

//         <MenuItem classes={classes.regField}>
//           <ValidationTextField
//             onChange={handleChange}
//             value={user.password}
//             // {...passwordInput}
//             // onChange={(e) => passwordInput.onChange(e.target.value)}
//             label="Password"
//             required
//             variant="outlined"
//             // defaultValue={userInfo && userInfo.passwordInput}
//             id="validation-outlined-input"
//           />
//         </MenuItem>

//         {(props.register) ? (
//           <>
//             <MenuItem classes={classes.regField}>
//               <ValidationTextField
//                 label="First Name"
//                 required
//                 variant="outlined"
//                 defaultValue={userInfo && userInfo.firstNameInput}
//                 id="validation-outlined-input"
//               />
//             </MenuItem>

//             <MenuItem classes={classes.regField}>
//               <ValidationTextField
//                 label="Last Name"
//                 required
//                 variant="outlined"
//                 defaultValue={userInfo && userInfo.lastNameInput}
//                 id="validation-outlined-input"
//               />
//             </MenuItem>

//             <MenuItem classes={classes.regField}>
//               <ValidationTextField
//                 label="Display Name"
//                 required
//                 variant="outlined"
//                 defaultValue={userInfo && userInfo.displayNameInput}
//                 id="validation-outlined-input"
//               />
//             </MenuItem>
//           </>
//           ):(<></>)
//         }

//           <button
//             variate="primary"
//             type="submit"
//             // style={{ width: "10rem", margin: "0 0 1.75rem" }}
//           >
//             Join!
//           </button>

//         <MenuItem button type="submit">
//           <Typography variant="button">
//             Join!
//           </Typography>
//         </MenuItem>

//         <ValidateFields validate={validate} />
//       </FormControl>
//       <MenuItem button onClick={(e) => props.loginRegisterHandler(e)}>
//         <Typography variant="button">
//           {notTitle} instead
//         </Typography>
//       </MenuItem>
//     </section>
//   )
// }

// export default LogRegFields