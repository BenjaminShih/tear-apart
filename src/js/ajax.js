let httpRequest;
if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
} else {
    try {
        httpRequest = new ActiveXObject('Microsoft.XMLHTTP')
    } catch(e) {
        httpRequest = new ActiveXObject('Msxml2.XMLHTTP')
    }
}


httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
            console.log(httpRequest.responseText);
        }
    }
}

httpRequest.open('get', '/repos/jaywcjlove/webpack-api-mocker', true);

httpRequest.send();
