import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_PROFILE,
    PROFILE_ERROR,
    GET_PROFILES,
    CLEAR_PROFILE,
    GET_REPOS
} from './types';

// Get current profile
export const getCurrentProfile = () => async dispatch => {
    try {
        
        const res = await axios.get('http://localhost:5000/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

    } catch (error) {
        console.log(error.response.statusText);
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

// Get all profiles
export const getProfiles = () => async dispatch => {
    dispatch({ type: CLEAR_PROFILE })
    try {
        
        const res = await axios.get('http://localhost:5000/api/profile');

        dispatch({
            type: GET_PROFILES,
            payload: res.data
        });

    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

// Get profile by ID
export const getProfileById = userId => async dispatch => {
    
    try {
        
        const res = await axios.get(`http://localhost:5000/api/profile/user/${userId}`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

// Get profile by repos
export const getGithubRepos = username => async dispatch => {
    
    try {
        
        const res = await axios.get(`http://localhost:5000/api/profile/github/${username}`);

        dispatch({
            type: GET_REPOS,
            payload: res.data
        });

    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}