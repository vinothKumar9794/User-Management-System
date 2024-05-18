const path = require("path");


function set(response,statusCode,responseHeader) {
    response.status(statusCode);
    response.set(responseHeader);
}


function sendResponse(request, response) {

    let url = request.url;

    if (url == "/home") {
        set(response,200,{"Content-Type":"text/html"});
        response.sendFile(path.join(__dirname,"../../views/pages/index.html"));
        return;
    }

    if (url == "/signUp") {
        set(response,200,{"Content-Type":"text/html"});
        response.sendFile(path.join(__dirname,"../../views/forms/signUp.html"));
        return;
    }

    if (url == "/login") {
        set(response,200,{"Content-Type":"text/html"});
        response.sendFile(path.join(__dirname,"../../views/forms/login.html"));
        return;
    }


}


module.exports = {
    sendResponse
};