import { addUser } from '../../api/addUser';
import { SEND_NEWMSG } from '../mutations-type.js';


const sendNew = {
    state:{
        userInfo:{},
    },
    mutations:{
        [SEND_NEWMSG](state,obj){
            console.log('hou',obj);
            state.userInfo = obj
        },
    },
    actions:{
        async addUser({commit},obj){
            let userInfor = await addUser(obj)
            commit("SEND_NEWMSG",userInfor.data)
            console.log('添加用户',userInfor)
        },
    }
}

export default sendNew