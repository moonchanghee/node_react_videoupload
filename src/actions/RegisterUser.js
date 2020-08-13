import Axios from 'axios';
import {REGISER_USERS} from './types'

export function registerUsers(data){
    const request = Axios.post('/register' ,data )
     // .then(res => res.json())                  //서버에서 받은 데이터를 request에 저장
     .then(res => res.data)
                                    //리턴으로 리듀서로 보냄
     return {            
     type: REGISER_USERS,
     payload : request
 }}