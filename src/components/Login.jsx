import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useInput from '../hooks/useInput';
import '../assets/css/AuthForm.css'
import useToggle from '../hooks/useToggle';

import axios from '../api/axios';
const LOGIN_URL = '/login';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";

    const userRef = useRef();
    const errRef = useRef();

    const [user, resetUser, userAttribs] = useInput('user', '')
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [check, toggleCheck] = useToggle('persist', false);

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
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            resetUser();
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
    return (
        <div className="registration-cssave">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form onSubmit={handleSubmit}>
                <h3 className="text-center">Authentication</h3>
                <div class="form-group">
                    <input 
                    className="form-control item" 
                    type="email"
                    ref={userRef} 
                    name="email"
                    autoComplete="off"
                    id="email" 
                    placeholder="Email" 
                    {...userAttribs}
                    required />
                </div>
                <div className="form-group">
                    <input 
                    className="form-control item" 
                    id="password"
                    type="password" 
                    name="Пароль" 
                    minlength="6"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    placeholder="password" 
                    required />
                </div>
                <div class="form-group">
                    <button className="btn btn-primary btn-block create-account" type="submit">Sing In</button>
                </div>
            </form>
    </div>
    );
};
export default Login;