import { useSelector } from "react-redux";

export const useAuth = () =>{
    const {
        authToken,
        avatar, building, created_at, 
        department, email, first_name, 
        last_name, first_name_native, 
        last_name_native, hire_date, 
        id, is_absent, roles, manager, room, 
        status, title, updated_at
    } = useSelector(state => state.user);
    return {
        authToken,
        isAuth: !!email,
        avatar,
        building,
        created_at,
        department,
        email,
        first_name,
        last_name,
        first_name_native,
        last_name_native,
        hire_date,
        id,
        is_absent,
        roles,
        manager,
        room,
        status,
        title,
        updated_at
    };
}