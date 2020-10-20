import { INIT_ORDER, ORDER_SEARCH } from '../mutations-type.js';
import { getInitOrder, getOrderSearch } from '../../api/reqOrder'

const orderAb = {
    state: {
        ordermsg: {},//订单页面初始化数据、搜索后返回数据
    },
    mutations: {
        [INIT_ORDER](state, obj) {
            console.log('订单初始化', obj);
            state.ordermsg = obj
        },//
        [ORDER_SEARCH](state, obj) {
            console.log('订单搜索', obj);
            state.ordermsg = obj
        },//
    },
    actions: {
        async getInitOrder({ commit }, obj) {
            let ordermsgr = await getInitOrder(obj)
            commit("INIT_ORDER", ordermsgr.data.data)
            console.log('初始化', ordermsgr)
        },//执行初始化请求 
        async getOrderSearch({ commit }, obj) {
            let ordermsgr = await getOrderSearch(obj)
            commit("ORDER_SEARCH", ordermsgr.data.data)
            console.log('订单搜索', ordermsgr)
        },//执行订单搜索请求
    },
}

export default orderAb