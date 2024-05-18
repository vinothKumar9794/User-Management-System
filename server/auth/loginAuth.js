const mySql = require("../../model/mysqlModel");


function userLogin(request, response) {
    let email = request.body.email;
    let password = request.body.password;      
    let sql = `SELECT * FROM USERS WHERE EMAIL = '${email}' `;
    mySql.select(sql, function(data) {
        let user = data[0];
        if (data.length == 0) {
            response.status(200);
            response.set({"Content-Type" : "text/plain"});
            response.end(JSON.stringify({
                "email" : false,
                "password" : false
            }));
        }

        if (user != null) {
            if (user.email == email && user.password == password) {
                response.status(200);
                response.set({"Content-Type" : "application/json"});
                response.json({
                    "email" : true,
                    "password" : true
                });
            }
            else if (user.email == email && user.password != password) {
                response.status(200);
                response.set({"Content-Type" : "application/json"});
                response.json({
                    "email" : true,
                    "password" : false
                });
            }
        }
    });
}



module.exports = {
    userLogin
};