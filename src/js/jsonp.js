function jsonp(setting) {
    setting.data = setting.data || {};
    setting.key = setting.key || 'callback';
    setting.callback = setting.callback || function () { };
    setting.data[setting.key] = '__onGetData__';

    window.__onGetData__ = function (data) {
        setting.callback(data)
    }

    var script = document.createElement('script');
    var query = [];

    for (var key in setting.data) {
        query.push(key + '=' + encodeURIComponent(setting.data[key]))
    }

    script.src = setting.url + '?' + query.join('&');
    document.head.appendChild(script);
    document.head.removeChild(script);


}

// module.exports = {
//     jsonp
// }


jsonp({
    url: 'http://photo.sina.cn/aj/index',
    key: 'jsoncallback',
    data: {
        page: 1,
        cate: 'recommend'
    },
    callback: function (ret) {
        console.log(ret)
    }
})