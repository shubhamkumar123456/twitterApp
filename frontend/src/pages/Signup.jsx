// import React, { useRef } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const Signup = () => {

//   let nameRef = useRef()
//   let emailRef = useRef()
//   let passwordRef = useRef()

//   let navigate = useNavigate()

//   const handleSubmit = async(e)=>{
//     e.preventDefault();
//     let obj = {
//       name:nameRef.current.value,
//       email:emailRef.current.value,
//       password:passwordRef.current.value
//     }
//     if(!obj.name || !obj.email || !obj.password){
//       return alert('please fill all the fields') 
//     }
//     // console.log(obj)
//     let res = await axios.post('http://localhost:8080/users/create',obj)
//     console.log(res.data)
//     if(res.data.success){
//       toast.success(res.data.msg,{position:'top-center'})
//       navigate('/login')
//     }else{
//       // alert(res.data.msg)
//       toast.error(res.data.msg,{position:'top-center'})
//     }
//   }
//   return (
//     <div>
//      <form className='w-50 bg-warning p-3 m-auto mt-5'>
//         <h3 className='text-center my-2'>Blog Signup page</h3>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
//     <input required ref={nameRef} type="text" className="form-control" id="name" aria-describedby="emailHelp" />
    
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input required ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input required ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
//   </div>
  
//   <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
//   <p className='text-center'>Already have an account? <Link to={'/login'}>Login</Link> </p>
// </form>

//     </div>
//   )
// }

// export default Signup

// ********************************************************
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Basic() {
  return (
    <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
      <MDBRow className="justify-content-center">
        <MDBCol md="8" lg="6">
          <MDBCard
            className="shadow-0 border"
            style={{ backgroundColor: "#f0f2f5" }}
          >
            <MDBCardBody>
              <MDBInput wrapperClass="mb-4" placeholder="Type comment..." label="+ Add a note" />

              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Martha</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Johny</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0">4</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Mary Kate</p>
                    </div>
                    <div className="d-flex flex-row align-items-center text-primary">
                      <p className="small mb-0">Upvoted</p>
                      <MDBIcon
                        fas
                        icon="thumbs-up mx-2 fa-xs"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small mb-0">2</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Johny</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0"></p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

//************************************************************** */


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// import FormControl from '@mui/material/FormControl';
// import Link from '@mui/material/Link';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
// import MuiCard from '@mui/material/Card';
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import getSignUpTheme from '../components/getSignUpTheme';
// import { GoogleIcon, FacebookIcon, SitemarkIcon } from '../components/CustomIcons';
// import TemplateFrame from '../components/TemplateFrame';

// const Card = styled(MuiCard)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignSelf: 'center',
//   width: '100%',
//   padding: theme.spacing(4),
//   gap: theme.spacing(2),
//   margin: 'auto',
//   boxShadow:
//     'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
//   [theme.breakpoints.up('sm')]: {
//     width: '450px',
//   },
//   ...theme.applyStyles('dark', {
//     boxShadow:
//       'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
//   }),
// }));

// const SignUpContainer = styled(Stack)(({ theme }) => ({
//   height: '100%',
//   padding: 4,
//   backgroundImage:
//     'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
//   backgroundRepeat: 'no-repeat',
//   ...theme.applyStyles('dark', {
//     backgroundImage:
//       'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
//   }),
// }));

// export default function Signup() {
//   const [mode, setMode] = React.useState('light');
//   const [showCustomTheme, setShowCustomTheme] = React.useState(true);
//   const defaultTheme = createTheme({ palette: { mode } });
//   const SignUpTheme = createTheme(getSignUpTheme(mode));
//   const [emailError, setEmailError] = React.useState(false);
//   const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
//   const [passwordError, setPasswordError] = React.useState(false);
//   const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
//   const [nameError, setNameError] = React.useState(false);
//   const [nameErrorMessage, setNameErrorMessage] = React.useState('');
//   // This code only runs on the client side, to determine the system color preference
//   React.useEffect(() => {
//     // Check if there is a preferred mode in localStorage
//     const savedMode = localStorage.getItem('themeMode');
//     if (savedMode) {
//       setMode(savedMode);
//     } else {
//       // If no preference is found, it uses system preference
//       const systemPrefersDark = window.matchMedia(
//         '(prefers-color-scheme: dark)',
//       ).matches;
//       setMode(systemPrefersDark ? 'dark' : 'light');
//     }
//   }, []);

//   const toggleColorMode = () => {
//     const newMode = mode === 'dark' ? 'light' : 'dark';
//     setMode(newMode);
//     localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
//   };

//   const toggleCustomTheme = () => {
//     setShowCustomTheme((prev) => !prev);
//   };

//   const validateInputs = () => {
//     const email = document.getElementById('email');
//     const password = document.getElementById('password');
//     const name = document.getElementById('name');

//     let isValid = true;

//     if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
//       setEmailError(true);
//       setEmailErrorMessage('Please enter a valid email address.');
//       isValid = false;
//     } else {
//       setEmailError(false);
//       setEmailErrorMessage('');
//     }

//     if (!password.value || password.value.length < 6) {
//       setPasswordError(true);
//       setPasswordErrorMessage('Password must be at least 6 characters long.');
//       isValid = false;
//     } else {
//       setPasswordError(false);
//       setPasswordErrorMessage('');
//     }

//     if (!name.value || name.value.length < 1) {
//       setNameError(true);
//       setNameErrorMessage('Name is required.');
//       isValid = false;
//     } else {
//       setNameError(false);
//       setNameErrorMessage('');
//     }

//     return isValid;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       name: data.get('name'),
//       lastName: data.get('lastName'),
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <TemplateFrame
//       toggleCustomTheme={toggleCustomTheme}
//       showCustomTheme={showCustomTheme}
//       mode={mode}
//       toggleColorMode={toggleColorMode}
//     >
//       <ThemeProvider theme={showCustomTheme ? SignUpTheme : defaultTheme}>
//         <CssBaseline enableColorScheme />
//         <SignUpContainer direction="column" justifyContent="space-between">
//           <Stack
//             sx={{
//               justifyContent: 'center',
//               height: '100dvh',
//               p: 2,
//             }}
//           >
//             <Card variant="outlined">
//               <SitemarkIcon />
//               <Typography
//                 component="h1"
//                 variant="h4"
//                 sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
//               >
//                 Sign up
//               </Typography>
//               <Box
//                 component="form"
//                 onSubmit={handleSubmit}
//                 sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
//               >
//                 <FormControl>
//                   <FormLabel htmlFor="name">Full name</FormLabel>
//                   <TextField
//                     autoComplete="name"
//                     name="name"
//                     required
//                     fullWidth
//                     id="name"
//                     placeholder="Jon Snow"
//                     error={nameError}
//                     helperText={nameErrorMessage}
//                     color={nameError ? 'error' : 'primary'}
//                   />
//                 </FormControl>
//                 <FormControl>
//                   <FormLabel htmlFor="email">Email</FormLabel>
//                   <TextField
//                     required
//                     fullWidth
//                     id="email"
//                     placeholder="your@email.com"
//                     name="email"
//                     autoComplete="email"
//                     variant="outlined"
//                     error={emailError}
//                     helperText={emailErrorMessage}
//                     color={passwordError ? 'error' : 'primary'}
//                   />
//                 </FormControl>
//                 <FormControl>
//                   <FormLabel htmlFor="password">Password</FormLabel>
//                   <TextField
//                     required
//                     fullWidth
//                     name="password"
//                     placeholder="••••••"
//                     type="password"
//                     id="password"
//                     autoComplete="new-password"
//                     variant="outlined"
//                     error={passwordError}
//                     helperText={passwordErrorMessage}
//                     color={passwordError ? 'error' : 'primary'}
//                   />
//                 </FormControl>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive updates via email."
//                 />
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   onClick={validateInputs}
//                 >
//                   Sign up
//                 </Button>
//                 <Typography sx={{ textAlign: 'center' }}>
//                   Already have an account?{' '}
//                   <span>
//                     <Link
//                       href="/material-ui/getting-started/templates/sign-in/"
//                       variant="body2"
//                       sx={{ alignSelf: 'center' }}
//                     >
//                       Sign in
//                     </Link>
//                   </span>
//                 </Typography>
//               </Box>
//               <Divider>
//                 <Typography sx={{ color: 'text.secondary' }}>or</Typography>
//               </Divider>
//               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="outlined"
//                   onClick={() => alert('Sign up with Google')}
//                   startIcon={<GoogleIcon />}
//                 >
//                   Sign up with Google
//                 </Button>
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="outlined"
//                   onClick={() => alert('Sign up with Facebook')}
//                   startIcon={<FacebookIcon />}
//                 >
//                   Sign up with Facebook
//                 </Button>
//               </Box>
//             </Card>
//           </Stack>
//         </SignUpContainer>
//       </ThemeProvider>
//     </TemplateFrame>
//   );
// }



// import React from "react";
// function SignUpForm() {
//   const [state, setState] = React.useState({
//     name: "",
//     email: "",
//     password: ""
//   });
//   const handleChange = evt => {
//     const value = evt.target.value;
//     setState({
//       ...state,
//       [evt.target.name]: value
//     });
//   };

//   const handleOnSubmit = evt => {
//     evt.preventDefault();

//     const { name, email, password } = state;
//     alert(
//       `You are sign up with name: ${name} email: ${email} and password: ${password}`
//     );

//     for (const key in state) {
//       setState({
//         ...state,
//         [key]: ""
//       });
//     }
//   };

//   return (
//     <div className="form-container sign-up-container">
//       <form onSubmit={handleOnSubmit}>
//         <h1>Create Account</h1>
//         <div className="social-container">
//           <a href="#" className="social">
//             <i className="fab fa-facebook-f" />
//           </a>
//           <a href="#" className="social">
//             <i className="fab fa-google-plus-g" />
//           </a>
//           <a href="#" className="social">
//             <i className="fab fa-linkedin-in" />
//           </a>
//         </div>
//         <span>or use your email for registration</span>
//         <input
//           type="text"
//           name="name"
//           value={state.name}
//           onChange={handleChange}
//           placeholder="Name"
//         />
//         <input
//           type="email"
//           name="email"
//           value={state.email}
//           onChange={handleChange}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           name="password"
//           value={state.password}
//           onChange={handleChange}
//           placeholder="Password"
//         />
//         <button>Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default SignUpForm;


// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBIcon,
//   MDBRow,
//   MDBCol,
//   MDBCheckbox
// }
// from 'mdbreact';
// import { MdRadioButtonChecked } from 'react-icons/md';

// function Signup() {
//   return (
//     <MDBContainer fluid className='my-5'>

//       <MDBRow className='g-0 align-items-center'>
//         <MDBCol col='6'>

//           <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
//             <MDBCardBody className='p-5 shadow-5 text-center'>

//               <h2 className="fw-bold mb-5">Sign up now</h2>

//               <MDBRow>
//                 <MDBCol col='6'>
//                   <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
//                 </MDBCol>

//                 <MDBCol col='6'>
//                   <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
//                 </MDBCol>
//               </MDBRow>

//               <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
//               <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

//               <div className='d-flex justify-content-center mb-4'>
//                 <MdRadioButtonChecked name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
//               </div>

//               <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

//               <div className="text-center">

//                 <p>or sign up with:</p>

//                 <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//                   <MDBIcon fab icon='facebook-f' size="sm"/>
//                 </MDBBtn>

//                 <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//                   <MDBIcon fab icon='twitter' size="sm"/>
//                 </MDBBtn>

//                 <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//                   <MDBIcon fab icon='google' size="sm"/>
//                 </MDBBtn>

//                 <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//                   <MDBIcon fab icon='github' size="sm"/>
//                 </MDBBtn>

//               </div>

//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>

//         <MDBCol col='6'>
//           <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
//             alt="" fluid/>
//         </MDBCol>

//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default Signup;
