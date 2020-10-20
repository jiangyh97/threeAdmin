import { LIST,CATEGORY_LIST,PRODUCT,SPECS,POWER_CTRL,GOODS_GLSEARCH,SPECS_SEARCH} from '../mutations-type.js';
import { getusermsg,getpowerctrl } from '../../api/home'
import { getgoodsclass,getgoodsproduct, getspecs,goodsGLSearch,specsSearch} from '../../api/goods'

const getsmoe = {
    state:{
        list:{},//用户管理
        goodslist:{},//品类管理
        product:{},//商品管理、商品管理搜索
        sysAttr:{},//规格属性、规格属性搜索
        role:{},//权限管理
    },
    mutations:{
        [LIST](state,obj){
            state.list = obj
        },//用户管理
        [CATEGORY_LIST](state,obj){
            state.goodslist = obj
        },//品类管理


        // 商品管理部分
        [PRODUCT](state,obj){
            // console.log('商品管理',obj);
            state.product = obj
        },//商品管理
        [GOODS_GLSEARCH](state,obj){
            // console.log('商品管理搜索',obj);
            state.product = obj
        },//商品管理搜索


        //规格属性
        [SPECS](state,obj){
            console.log('规格属性',obj);
            state.sysAttr = obj
        },//规格属性
        [SPECS_SEARCH](state,obj){
            console.log('规格属性搜索',obj);
            state.sysAttr = obj
        },//规格属性搜索


        [POWER_CTRL](state,obj){
            console.log('规格属性',obj);
            state.role = obj
        },//权限管理

    },
    actions:{
        async getusermsg({commit},obj){
            let listr = await getusermsg(obj)
            commit("LIST",listr.data.data)
            console.log('查询用户',listr.data);
        },//用户管理
        async getgoodsclass({commit},obj){
            let getgoodsclassr = await getgoodsclass(obj)
            commit("CATEGORY_LIST",getgoodsclassr.data.data)
            console.log('查询商品分类',getgoodsclassr);
        },//品类管理


        // 商品管理
        async getgoodsproduct({commit},obj){
            let productr = await getgoodsproduct(obj)
            commit("PRODUCT",productr.data.data)
            console.log('查询商品管理',productr);
        },//商品管理
        async goodsGLSearch({commit},obj){
            let productrr = await goodsGLSearch(obj)
            commit("GOODS_GLSEARCH",productrr.data.data)
            console.log('商品管理搜索',productrr);
        },//商品管理搜索


        async getspecs({commit},obj){
            let sysAttrr = await getspecs(obj)
            commit("SPECS",sysAttrr.data.data)
            console.log('查询规格属性',sysAttrr);
        },//规格属性
        async specsSearch({commit},obj){
            let sysAttrro = await specsSearch(obj)
            commit("SPECS_SEARCH",sysAttrro.data.data)
            console.log('规格属性搜索xia',sysAttrro);
        },//规格属性搜索


        async getpowerctrl({commit},obj){
            let roler = await getpowerctrl(obj)
            commit("POWER_CTRL",roler.data.data)
            console.log('查询权限管理',roler);
        },//权限管理

    }
}
export default getsmoe