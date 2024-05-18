const mySql = require("../../model/mysqlModel");
const path = require("path");
const fs = require("fs");


try {
    mySql.config();
    mySql.createDataBase("UMS");
    mySql.createTable("CREATE TABLE USERS (ID INT AUTO_INCREMENT PRIMARY KEY, NAME VARCHAR(50), EMAIL VARCHAR(255), PASSWORD VARCHAR(10))".toLowerCase());
}
catch (error) {
    console.log(error.messasge);
}




function add(request, response) {
    let newUser = request.body;
    let sql = `INSERT INTO USERS (NAME, EMAIL, PASSWORD) VALUES ?`;
    let values = [newUser.name, newUser.email, newUser.password];
    mySql.insert(sql, values);
    response.redirect("/ums/v1/home");
}



function getUsers(request, response) {
    mySql.select("SELECT * FROM USERS", function (data) {
        response.status(200);
        response.set({ "Content-Type": "application/json" });
        response.json({
            "status": "success",
            "count": data.length,
            "data": {
                "users": data
            }
        });
    });
}




function getUser(request, response) {
    let userID = request.params.id;
    let sql = `SELECT * FROM USERS WHERE ID = ${userID}`;
    mySql.select(sql, function (data) {
        if (data.length == 0) {
            response.status(404);
            response.set({ "Content-Type": "application/json" });
            response.json({
                "status": "fail",
                "message": `User with ID ${userID} is not Found`
            });
            return;
        }
        else {
            response.status(200);
            response.set({ "Content-Type": "application/json" });
            response.json({
                "status": "success",
                "data": {
                    "user": data[0]
                }
            });
        }
    });
}




function remove(request, response) {
    let userID = request.params.id;
    let sql = `SELECT * FROM USERS WHERE ID = ${userID}`;
    mySql.select(sql, function (data) {
        if (data.length == 0) {
            response.status(404);
            response.set({ "Content-Type": "application/json" });
            response.json({
                "status": "fail",
                "message": `User with ID ${userID} is not Found`
            });
            return;
        }
        else {
            let sql = `DELETE FROM USERS WHERE ID = ${userID}`;
            mySql.remove(sql);
            response.status(204);
            response.set({ "Content-Type": "application/json" });
            response.json({
                "status": "success",
                "data": {
                    "user": null
                }
            });
        }
    });
}





function update(request, response) {
    let userID = request.params.id;
    let newData = Object.entries(request.body);
    let sql = `SELECT * FROM USERS WHERE ID = ${userID}`;
    mySql.select(sql, function (data) {
        if (data.length == 0) {
            response.status(404);
            response.set({ "Content-Type": "application/json" });
            response.json({
                "status": "fail",
                "message": `User with ID ${userID} is not Found`
            });
            return;
        }
        else {
            for (let entries of newData) {
                let sql = `UPDATE USERS SET ${entries[0]} = '${entries[1]}' WHERE ID = ${userID}`;
                mySql.update(sql);
            }
            let user = Object.assign(data[0], request.body);
            response.status(200);
            response.set({ "Content-Type": "application/json" });
            response.json({
                "status": "success",
                "data": {
                    "user": user
                }
            });
        }
    });
}



let editMenuHTML = fs.readFileSync(path.join(__dirname, "../../views/forms/edit.html"), "utf-8");
function editMenu(request, response) {
    let userID = request.params.id;
    let sql = `SELECT * FROM USERS WHERE ID = ${userID}`;
    mySql.select(sql, function (data) {
        let user = data[0];
        let finalEditMenuHTML = editMenuHTML.replace("{name}", user.name)
            .replace("{email}", user.email)
            .replace("{password}", user.password)
            .replace("{password}", user.password);
        response.status(200);
        response.set({ "Content-Type": "text/html" });
        response.send(finalEditMenuHTML);
    });
}

module.exports = {
    add, getUsers, getUser, remove, update, editMenu
};