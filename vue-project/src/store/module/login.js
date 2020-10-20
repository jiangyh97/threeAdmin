import { GET_USERINFO } from '../mutations-type.js'
import { getLogin } from '../../api/common'
const login = {
    state: {
        // userName: "admin",
        userInfo: {}
    },
    mutations: {
        [GET_USERINFO](state, obj) {
            console.log('后',obj)
            state.userInfo = obj
        }
    },
    actions: {
        async getLogin({ commit }, obj) {
            let userInfor = await getLogin(obj)
            commit("GET_USERINFO", userInfor.data)
            if (userInfor.data.status == 0) {
                localStorage.setItem('token', userInfor.data.token);
                localStorage.setItem('username', userInfor.data.data.username);
            } else if (userInfor.data.status == 1) {
                alert(userInfor.data.msg)
            }
        }
    }
}

export default login;