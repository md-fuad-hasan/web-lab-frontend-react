import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    token : null,
    userId : null,
    reg : null,
    signupSuccess : false,
    session: null,
    profile_pic: null,
    mobile_no:null,
    full_name: null,
    loginErr: null,
    signupErr: null,
    fillupData: null,
    fillupAllData: null,
    fillupDoneId: null
}


export const reducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case actionTypes.SIGNUP_SUCCESS:
            return{
                ...state,
                signupSuccess : true,
                signupErr: null,
            }
        case actionTypes.SIGNUP_FINISHED:
            return{
                ...state,
                signupSuccess: false
            }

        case actionTypes.SIGNUP_ERROR:
            return{
                ...state,
                signupErr : action.payload
            }

        case actionTypes.LOGIN_SUCCESS:
            
            return{
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                roll: action.payload.roll,
                loginErr: null,
                signupErr: null,
               
            }
        case actionTypes.LOGIN_ERROR:
            return{
                ...state,
                loginErr : action.payload.loginErr
            }
        case actionTypes.LOGOUT_SUCCESS:
            return{
                ...state,
                token: null,
                userId: null,
                reg: null,
                profile_pic: null,
                session: null,
                mobile_no: null, 
                full_name:null,
                fillupData:null

            }

        case actionTypes.PROFILE_DETAIL:
            return{
                ...state,
                reg : action.payload.reg,
                profile_pic : action.payload.profile_pic,
                session : action.payload.session,
                mobile_no : action.payload.mobile_no,
                full_name: action.payload.full_name
            }

        case actionTypes.USER_FORM_FILLUP:
            return{
                ...state,
                
                fillupData: action.payload.fillupData
            }

        case actionTypes.USER_FORM_FILLUP_ALL:
            return{
                ...state,
                
                fillupAllData: action.payload.fillupAllData
            }

        case actionTypes.FORM_FILLUP_DONE:
            return{
                ...state,
                fillupDoneId: action.payload.fillupDoneId
            }
        
        default:
            return state
    }
}