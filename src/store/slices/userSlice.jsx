import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authToken: null,
    avatar : null,
    building : {
        address: null,
        country: null,
        id: null
    },
    created_at: null,
    department: {
        id: null,
        name: null
    },
    email: null,
    first_name: null,
    last_name : null,
    first_name_native: null,
    last_name_native: null,
    hire_date: null,
    id: null,
    roles: {
        is_admin: null,
        is_user: null,
        is_manager: null,
        is_personnel_officer: null
    },    
    is_absent: null,
    manager: {
        id: null,
        first_name: null,
        last_name: null,
    },
    room: {
        id: null,
        name: null,
    },
    status: null,
    title: null,
    updated_at: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUser(state, action) {
            state.authToken = action.payload.authToken;
            state.avatar = action.payload.avatar;
            state.building.address = action.payload.building.address;
            state.building.country = action.payload.building.country;
            state.building.id = action.payload.building.id;
            state.created_at = action.payload.created_at;
            state.department.id = action.payload.department.id;
            state.department.name = action.payload.department.name;
            state.email = action.payload.email;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.first_name_native = action.payload.first_name_native;
            state.last_name_native = action.payload.last_name_native;
            state.hire_date = action.payload.hire_date;
            state.id = action.payload.id;
            state.is_absent = action.payload.is_absent;
            state.roles.is_admin = action.payload.roles.is_admin;
            state.roles.is_manager = action.payload.roles.is_manager;
            state.roles.is_personnel_officer = action.payload.roles.is_personnel_officer;
            state.roles.is_user = action.payload.roles.is_user;
            state.manager.id = action.payload.manager.id;
            state.manager.first_name = action.payload.manager.first_name;
            state.manager.last_name = action.payload.manager.last_name;
            state.room.id = action.payload.room.id;
            state.room.name = action.payload.room.name;
            state.status = action.payload.status;
            state.title = action.payload.title;
            state.updated_at = action.payload.updated_at;
        },
        removeUser(state) {
            state.authToken = null;
            state.avatar = null;
            state.building.address = null;
            state.building.country = null;
            state.building.id = null;
            state.created_at = null;
            state.department.id = null;
            state.department.name = null;
            state.email = null;
            state.first_name = null;
            state.last_name = null;
            state.first_name_native = null;
            state.last_name_native = null;
            state.hire_date = null;
            state.id = null;
            state.is_absent = null;
            state.roles.is_admin = null;
            state.roles.is_manager = null;
            state.roles.is_user = null;
            state.roles.is_personnel_officer = null;
            state.manager.id = null;
            state.manager.first_name = null;
            state.manager.last_name = null;
            state.room.id = null;
            state.room.name = null;
            state.status = null;
            state.title = null;
            state.updated_at = null;
        }
    }
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
