// import React, { useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import initializeAuthentication from '../Firebase/firebase.init';

// initializeAuthentication();

// const Register = () => {

//     const auth = getAuth();

//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [error, setError] = useState('');


//     const handleEmailChangeReg = e =>{
//         setEmail(e.target.value);
//     }

//     const handlePassChangeReg = e =>{
//         setPass(e.target.value);
//     }

//     const handleSubmitReg = e =>{
//         e.preventDefault();
//         console.log("Register pressed", email, pass);
//         if(pass.length < 6){
//             setError('Password Must be at least 6 characters long')
//             return;
//         }
//         if(!/(?=.*[A-Z].*[A-Z])/.test(pass)){
//             setError('Password Must contain 2 upper case');
//             return;
//         }
//         if(!/(?=.*[0-9].*[0-9])/.test(pass)){
//             setError('Password Must contain 2 Integer');
//             return;
//         }
//         createUserWithEmailAndPassword(auth, email, pass)
//         .then(result =>{
//             const user = result.user;
//             console.log(user);
//             setError('')
//         })
//         .catch(error =>{
//             setError(error.message)
//         })
        
//     }

//     return (
//         <div>
//             <h3>Create new Account</h3>
//             <Form onSubmit={handleSubmitReg} style={{width:"33%", margin:"auto"}}>
//                 <Form.Group className="mb-3" controlId="formGroupEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control onBlur={handleEmailChangeReg} type="email" required placeholder="Enter email" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formGroupPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control onBlur={handlePassChangeReg} type="password" required placeholder="Enter Password" />
//                 </Form.Group>
//                 <h6 className="text-danger">{error}</h6>
//                 <Button variant="secondary" type="submit">
//                 Submit
//                 </Button>
//             </Form>
//             <p>Already have an account? <Link to="/login">Log-in</Link></p>
//         </div>
//     );
// };

// export default Register;