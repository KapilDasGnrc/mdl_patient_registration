import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from '../Api/axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const csrf = () => axios.get("/sanctum/csrf-cookie" );

    const getUser = async () => {
        const { data } = await axios.get("api/user");
        // console.log(data)
        setUser(data);
    }

    const login = async ({ ...data }) => {
        await csrf();
        setErrors([]);

        try {
            await axios.post('/login', data);
            await getUser();
            navigate('/')
        } catch (e) {

            if (e.response.status === 422) {
                // console.log(e.response.data);
                setErrors(e.response.data.errors)
            }

            else if (e.response.status === 419) {
                // console.log(e.response.data);
                setErrors({ 'message': e.response.data.message })
            }

        }
    }

    const register = async ({ ...data }) => {
        await csrf();
        setErrors([]);

        try {
            await axios.post('/register', data);
            navigate('/')
        } catch (e) {

            if (e.response.status === 422) {
                // console.log(e.response.data);
                setErrors(e.response.data.errors)
            }

            else if (e.response.status === 419) {
                // console.log(e.response.data);
                setErrors({ 'message': e.response.data.message })
            }

        }
    }


    const logout = async () => {
        await axios.post("/logout").then(() => {
             setUser(null);
             navigate('/')
        });
    };

    useEffect(() => {
      
        if(!user){
            getUser();
        }
    
    }, [user]);

    return <AuthContext.Provider value={{ user, errors, getUser, login, register, logout }}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext() {
    return useContext(AuthContext);
}


