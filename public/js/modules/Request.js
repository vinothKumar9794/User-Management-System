
export class Request {


    makeRequest(requestURL, requestMethod, async, override, data, callBackFunction) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) callBackFunction(xhttp);
        }
        xhttp.open(requestMethod, requestURL, async);
        if (override) xhttp.setRequestHeader("X-HTTP-Method-Override", requestMethod);
        if (data != "") xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(data);
    }



    contains(requestURL, async) {
        let booleanValue = false;
        this.makeRequest(requestURL, "GET", async, false, "", function (requestObject) {
            if (requestObject.responseText == "true") booleanValue = true;
        });
        return booleanValue;
    }



    get(requestURL, async) {
        let response;
        this.makeRequest(requestURL, "GET", async, false, "", function (responseObject) {
            response = responseObject;
        });
        return response;
    }




    post(requestURL, async, data) {
        let response;
        this.makeRequest(requestURL, "POST", async, false, data, function (responseObject) {
            response = responseObject;
        });
        return response;
    }



    patch(requestURL, async, data) {
        let response;
        this.makeRequest(requestURL, "PATCH", async, true, data, function (requestObject) {
            response = requestObject;
        });
        return response;
    }




    delete(requestURL, async) {
        let response;
        this.makeRequest(requestURL, "DELETE", async, true, "", function (requestObject) {
            response = requestObject;
        });
        return response;
    }


}




