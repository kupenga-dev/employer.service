import { useRef, useState, useEffect } from 'react';
import 'assets/css/AuthForm.css'
import axios from 'api/axios';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const LOGIN_URL = '/users/login';

const Login = () => {
    const dispatch = useDispatch();
    const { authToken } = useAuth();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    
    const location = useLocation();
    const errRef = useRef();


    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ "email": email, "password": pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );

            if (response.data.result.data[0].authorization_token) {
                localStorage.setItem('authorization_token', response.data.result.data[0].authorization_token);
            }
            dispatch(setUser({
                authToken : response.data.result.data[0].authorization_token,
                avatar: response.data.result.data[0].avatar,
                building : {
                    address: response.data.result.data[0].building.address,
                    country: response.data.result.data[0].building.country,
                    id: response.data.result.data[0].building.id
                },
                created_at: response.data.result.data[0].created_at,
                department: {
                id: response.data.result.data[0].department.id,
                name: response.data.result.data[0].department.name
                },
                email: response.data.result.data[0].email,
                first_name: response.data.result.data[0].first_name,
                last_name : response.data.result.data[0].last_name,
                first_name_native: response.data.result.data[0].first_name_native,
                last_name_native: response.data.result.data[0].last_name_native,
                hire_date: response.data.result.data[0].hire_date,
                id: response.data.result.data[0].id,
                is_absent: response.data.result.data[0].is_absent,
                roles: {
                    is_admin: response.data.result.data[0].is_admin ?? 2000,
                    is_user: 2001,
                    is_manager: response.data.result.data[0].is_manager ?? 1900,
                    is_personnel_officer: response.data.result.data[0].is_personnel_officer ?? 3000
                },
                manager: {
                    id: response.data.result.data[0].manager.id,
                    first_name: response.data.result.data[0].manager.first_name,
                    last_name: response.data.result.data[0].manager.last_name,
                },
                room: {
                    id: response.data.result.data[0].room.id,
                    name: response.data.result.data[0].room.name,
                },
                status: response.data.result.data[0].status,
                title: response.data.result.data[0].title,
                updated_at: response.data.result.data[0].updated_at
            }));
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
    return authToken ? <Navigate to="/" state={{ from: location }} replace/> : (
        <div className="registration-cssave">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form onSubmit={handleSubmit}>
                <h3 className="text-center">Authentication</h3>
                <div className="form-group">
                    <input 
                    className="form-control item" 
                    type="email"
                    name="email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                    required />
                </div>
                <div className="form-group">
                    <input 
                    className="form-control item" 
                    type="password" 
                    name="Пароль" 
                    minLength="6"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    placeholder="Password"
                    required />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block create-account" type="submit">Sing In</button>
                </div>
            </form>
    </div>
    );
};
export default Login;