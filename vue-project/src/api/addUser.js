import server from '../utils/request';

export function addUser(data) {
    return server({
        method: "POST",
        url:"/api/manage/user/add",
        data
    })
}

