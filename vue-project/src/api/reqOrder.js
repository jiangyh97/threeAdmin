import server from "../utils/request";

export  function getInitOrder(params) {
    return server({
        url: "/api/manage/order/list",
        method: "GET",
        params
    })
}

export  function getOrderSearch(params) {
    return server({
        url: "/api/manage/order/search",
        method: "GET",
        params
    })
}