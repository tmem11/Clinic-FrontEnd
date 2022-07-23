import {
    LOGIN,
    LOGOUT,
    SET_CLINIQUSES,

} from "./app.types";
import axios from "axios";
import axiosCookie from '../../axisCokie'
import store from "../store";
export const set_logged_in_user = (user) => {
    return {
        type: LOGIN,
        payload: {
            user: user
        }
    };
};
export const set_logged_out = () => {
    return {
        type: LOGOUT,
        payload: {
           
        }
    };
};
export const set_cliniques = (cliniques) => {
    return {
        type: SET_CLINIQUSES,
        payload: {
            cliniques:cliniques
        }
    };
};

export const logout=()=>dispatch=>{
    console.log("logging out");
    dispatch(set_logged_out())
}
export const login=user=>dispatch=>{
    const params = new URLSearchParams();
    params.append("username", user.username);
    params.append("password", user.password);
    console.log(params)
    axiosCookie.post("/login",params).then(res=>{
        console.log(res);
        dispatch(set_logged_in_user(res.data))
    }).catch(err=>console.log(err))
    console.log(user);
}

export const addNewCliniqe=clinique=>dispatch=>{
    const params = new URLSearchParams();
    params.append("description", clinique.description);
    params.append("longitude", clinique.longitude);
    params.append("latitude", clinique.latitude);
    let reguestHeader={
        'Content-Type': 'application/json',
    } ;
    console.log(params)
    axiosCookie.post("/api/v1/clinic/add-clinic",clinique ,{
        headers:reguestHeader
    }).then(res=>{
        console.log(res);
    }).catch(err=>console.log(err))
    console.log(clinique);
}

export const get_cliniques=location=>dispatch=>{
    const params = new URLSearchParams();
    params.append("longitude", location.longitude);
    params.append("latitude", location.latitude);
    let reguestHeader={
        'Content-Type': 'application/json'} ;
    console.log(params)
    axiosCookie.get("/api/v1/clinic/get-the-k-nearest-clinics",{params:params,headers:reguestHeader}).then(res=>{
        console.log(res);
        dispatch(set_cliniques(res.data))
    }).catch(err=>console.log(err))
    console.log(location);
}