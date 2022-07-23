import {
    LOGIN,
    LOGOUT,
    SET_CLINIQUSES
} from "./app.types";

const INITIAL_STATE = {
    user:undefined,
    cliniques:[]
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload.user,
            };
        case LOGOUT:
            return {
                ...state,
                user:undefined,
            };
        
        case SET_CLINIQUSES:
            return {
                ...state,
                cliniques:action.payload.cliniques
            };;

        default:
            return state;
    }
};

export default reducer;
