import server from '../utils/request';

export function getLogin(data) {
    return server({
        method: "POST",
        url:"/api/login",
        data
    })
}