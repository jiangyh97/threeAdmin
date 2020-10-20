import server from '../utils/request';

export function getusermsg(obj) {//获取用户管理页面数据
    return server({
        method: "GET",
        url:"/api/manage/user/list",
        params:obj
    })
}
export function getpowerctrl(obj) {//获取权限管理页面数据
    return server({
        method: "GET",
        url:"/api/manage/role/list",
        params:obj
    })
}