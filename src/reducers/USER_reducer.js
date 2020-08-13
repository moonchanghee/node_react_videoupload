import { LOGIN_USERS} from '../actions/types'

// const LOGIN_USER = "User_arcions/LOGIN_USERS"


export default function(state = {} , action) {
        switch(action.type){
            case LOGIN_USERS :
                return {...state , Success: action.payload}
                break;
 
                default: return state;
        }

}