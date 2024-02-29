import { ADMINLOGIN_ENDPOINT, API_BASE_URL, CREATEPARENT_ENDPOINT, CREATE_ENDPOINT, GETALLPARENT_ENDPOINT, GETALL_ENDPOINT,
     GETONE_ENDPOINT, GETPROFILEPIC_ENDPOINT, LOGIN_ENDPOINT, SIGNUP_ENDPOINT } from "./Constants.js";

export const loginUrl =`${API_BASE_URL}${LOGIN_ENDPOINT}`;
export const adminurl = `${API_BASE_URL}${ADMINLOGIN_ENDPOINT}`;
export const signupUrl =`${API_BASE_URL}${SIGNUP_ENDPOINT}`;
export const getoneUrl = `${API_BASE_URL}${GETONE_ENDPOINT}`;
export const getallUrl = `${API_BASE_URL}${GETALL_ENDPOINT}`;
export const getallparentUrl = `${API_BASE_URL}${GETALLPARENT_ENDPOINT}`;
export const getprofilepicUrl = `${API_BASE_URL}${GETPROFILEPIC_ENDPOINT}`;
export const createUrl = `${API_BASE_URL}${CREATE_ENDPOINT}`;
export const createparentUrl = `${API_BASE_URL}${CREATEPARENT_ENDPOINT}`;