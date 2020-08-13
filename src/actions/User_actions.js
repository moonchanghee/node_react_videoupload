import Axios from 'axios';
import {LOGIN_USERS} from './types'

// const LOGIN_USER = "User_arcions/LOGIN_USERS"

export function loginUser(data){
   const request = Axios.post('/' ,data )
    // .then(res => res.json())                  //서버에서 받은 데이터를 request에 저장
    .then(res => res.data.userId)
                                   //리턴으로 리듀서로 보냄
    return {            
    type: LOGIN_USERS,
    payload : request
}}