const mySql = require("../../model/mysqlModel");

function userSignup(request, response) {
    let email = request.body.email;
    let sql = `SELECT * FROM USERS WHERE EMAIL = '${email}'`;
    mySql.select(sql, function(data) {
        if (data.length == 0) {
            response.status(200);
            response.set({"Content-Type" : "text/plain"});
            response.end(JSON.stringify({
                "email" : true,
            }));
        }
        else {
            response.status(200);
            response.set({"Content-Type" : "text/plain"});
            response.end(JSON.stringify({
                "email" : false,
            }));  
        }
    });
}

module.exports = {
    userSignup
};