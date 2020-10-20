import Vue from 'vue';
import Vuex from 'vuex';
import login from './module/login';
import sendNew from './module/users';
import getsmoe from './module/home';
import goodsAb from './module/goods';
import orderAb from './module/order';


Vue.use(Vuex) // 使用vuex组件

//创建仓库

const store= new Vuex.Store({
    modules: {
        login,sendNew,getsmoe,goodsAb,orderAb
    },
    state: {
        // userName: '阿红'
    },
    mutations: {

    },
})


export default store;

