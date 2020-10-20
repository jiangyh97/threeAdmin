import server from '../utils/request';

export function getgoodsclass(obj) {//品类管理内容
    return server({
        method: "GET",
        url:"/api/manage/category/list",
        params:obj
    })
}

export function addgoodsclass(obj) {//品类管理-》添加分类
    return server({
        method: "POST",
        url:"/api/manage/category/add",
        data:obj
    })
}

export function changeclass(obj){//品类管理=》修改分类
    return server({
        method:"POST",
        url:"/api/manage/category/update",
        data:obj
    })
}
export function getgoodsproduct(obj){//商品管理内容
    return server({
        method:"GET",
        url:"/api/manage/product/list",
        params:obj
    })
}
export function goodsGLSearch(obj){//商品管理页面的搜索请求
    return server({
        method:"GET",
        url:"/api/manage/product/search",
        params:obj
    })
}


export function getspecs(obj){//规格属性
    return server({
        method:"GET",
        url:"/api/manage/sysAttr/list",
        params:obj
    })
}

export function specsSearch(obj){//搜索规格
    return server({
        method:"GET",
        url:"/api/manage/sysAttr/search",
        params:obj
    })
}