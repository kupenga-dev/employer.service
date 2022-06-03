import { useDispatch } from "react-redux";
import { removeUser } from "store/slices/userSlice";
import { useRef, useState } from "react";
import { axiosAuth } from "api/axios";

const LOGOUT_URL = '/users/logout';

const Logout = () => {
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState('');
    const errRef = useRef();
    const logout = async (e) => {
        e.preventDefault();
        try {
            await axiosAuth.post(LOGOUT_URL);
            dispatch(removeUser());
            localStorage.setItem('authorization_token', null);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Something wrong, try later');
            }
        }
    }
    return (
        <div className="logout">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <button onClick={(e) => logout(e)}><img src="images/Logout.png" alt="XXX"/></button>
        </div>
    )
}
export default Logout;