import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import initializeAuthentication from '../Firebase/firebase.init';
import useAuth from '../hooks/useAuth';

initializeAuthentication();

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const auth = getAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    console.log('came from', location.state?.from)


    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState('');

    const handleRegistration = (e) =>{
        e.preventDefault();
        console.log("Register pressed", email, pass);
        if(pass.length < 6){
            setError('Password Must be at least 6 characters long')
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(pass)){
            setError('Password Must contain 2 upper case');
            return;
        }
        if(!/(?=.*[0-9].*[0-9])/.test(pass)){
            setError('Password Must contain 2 Integer');
            return;
        }
        createUserWithEmailAndPassword(auth , email, pass)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
            varifyEmail();
            setUserName();
        })
        .catch(error =>{
            setError(error.message);
        })

        isLogin ? processLogin(email, pass) : createNewUser(email, pass);
    }

    const varifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(result =>{
            console.log(result);
        })
    }

    const setUserName = () =>{
      updateProfile(auth.currentUser, {displayName:name})
      .then(result =>{
        
      })
    }

    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
        })
      .catch(error =>{
            setError(error.message);
        })
    }

    const createNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            setError(' ');
        })
        .catch(error=>{
            setError(error.message);
        })
    }



    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }

    const handlePassChange = e =>{
        setPass(e.target.value);
    }

    const toggleLogIn = e =>{
        setIsLogin(e.target.checked);
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }

    const handleSubmitLogin = (e, email, pass) =>{
        console.log("submit pressed", email, pass);
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error =>{
            setError(error.message);
        })
    }

    const handleForgotPass = () =>{
        sendPasswordResetEmail(auth, email)
        .then(()=>{

        })
        //   .catch((error) =>{
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        // })
    }

    // Redirect funtionality
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }

    return (
        <div>
            <h2>Please {isLogin ? "Log-in" : "Register"}</h2>
            <Form onSubmit={handleSubmitLogin} style={{width:"35%", margin:"auto"}}>
                {!isLogin && <Form.Group className="mb-1" controlId="formGroupEmail">
                        <Form.Label>User-Name</Form.Label>
                        <Form.Control onBlur={handleNameChange} type="text" required placeholder="Enter Username" />
                    </Form.Group> 
                }
                <Form.Group className="mb-1" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" required placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassChange} type="password" required placeholder="Enter Password" />
                </Form.Group><br/>
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" onChange={toggleLogIn} label="Already Registred?" />
                </Form.Group>
                <h5>{error}</h5>
                {isLogin && <Button size="sm" variant="link" onClick={handleForgotPass}>Forgot pass</Button>}
                <Button onClick={handleRegistration} variant="secondary" type="submit">
                    {isLogin ? "Log-in" : "Register"}
                </Button>
            </Form><br/><br/>
            {/* <p> New to Flesh Drill ? <Link to="/register">Create Account</Link></p> */}
            <Button onClick={handleGoogleLogin} variant="btn btn-warning">Google Sign-in</Button>
            {/* <Button onClick={signInUsingGoogle} variant="btn btn-warning">Google Sign-in</Button> */}
        </div>
    );
};

export default Login;