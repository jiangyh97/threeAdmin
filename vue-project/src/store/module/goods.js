import {ADD_GOODSCLASS,CHANGE_CLASS} from '../mutations-type.js';
import { addgoodsclass, changeclass,} from '../../api/goods'

const goodsAb = {
    state:{
        userInfo:{},//添加分类
        update:{},//修改分类
       
    },
    mutations:{
        [ADD_GOODSCLASS](state,obj){
            console.log('tianhou',obj);
            state.userInfo = obj
        },//添加分类
        [CHANGE_CLASS](state,obj){
            console.log('xiuhou',obj);
            state.update = obj
        },//修改分类
        
    },
    actions:{
        async addgoodsclass({commit},obj){
            // console.log('千山2',obj);
            let userInfor = await addgoodsclass(obj)
            commit("ADD_GOODSCLASS",userInfor.data)
            console.log('添加分类',userInfor)
        },//添加分类
        async changeclass({commit},obj){
            let updatar = await changeclass(obj)
            commit("CHANGE_CLASS",updatar.data.data)
            console.log("修改分类",updatar);
        },//修改分类
    }
}

export default goodsAb