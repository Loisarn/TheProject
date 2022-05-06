import React, { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../../context/AuthProvider.js";
import Register from "./Register.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserService from '../../services/UserService.js';
import { Link } from 'react-router-dom';

const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({user, pwd}),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
             );
             console.log(JSON.stringify(response?.data))
             const accessToken = response?.data?.accessToken;
             const roles = response?.data?.roles;
             setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing username or password");
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login Failed");
            }
            errRef.current.focus();
        }
    }


  return (
      <>
      {success ? (
          <section>
              <h1>Du är inloggad.</h1>
              <br />
              <p>
                 <a href="/home">Tryck på hem</a> 
                  </p>
          </section>
      ) : ( 
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1 className="login">Logga in</h1>
      <form onSubmit={handleSubmit}>
          <label htmlFor="username">Användarnamn:</label>
          <input type="text" placeholder="användarnamn" id="username" 
          ref={userRef} autoComplete="off" 
          onChange={(e) => setUser(e.target.value)} value={user} required />

          <label htmlFor="password">Lösenord:</label>
          <input type="password" 
          placeholder="lösenord" 
          id="password" 
          onChange={(e) => setPwd(e.target.value)} 
          value={pwd} required/>
          <button>Logga in</button>
      </form>
      <p>
          Need an Account? <br />
          <span className="line">
              {<Link to="/register">Sign up</Link>}
          </span>
      </p>
    </section>
      )}
      </>
  )
}

export default Login