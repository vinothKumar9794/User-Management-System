const mySql = require("mysql2");
const dotenv = require("dotenv").config();

var HOST = null;
var USER_NAME = null;
var USER_PASSWORD = null;



function config() {
    HOST = process.env.DB_HOST;
    USER_NAME = process.env.DB_USER_NAME;
    USER_PASSWORD = process.env.DB_USER_PASSWORD;
}


function createConnection(host, dataBaseName, userName, password) {
    let connection;
    if (dataBaseName) {
        connection = mySql.createConnection({
            host : host,
            user : userName,
            password : password,
            database : dataBaseName
        });
    }
    else {
        connection = mySql.createConnection({
            host : host,
            user : userName,
            password : password 
        });
    }
 
    return (connection != null) ? connection : null;
}



function createDataBase(dataBaseName) {
    let connection = createConnection(HOST,null,USER_NAME,USER_PASSWORD);
    connection.connect();
    let sql =  `CREATE DATABASE ${dataBaseName}`;
    connection.query(sql,(error) => {
        // if (error) throw new Error(error);
        // console.log(error.message);
        connection.end();
    });
}


function createTable(sql) {
    let connection = createConnection(HOST,"UMS",USER_NAME,USER_PASSWORD);
    connection.connect();
    connection.query(sql,(error) => {
        // if (error) throw error;
        console.log(error.message);
        connection.end();
    });
}



function insert(sql,values) {
    let connection = createConnection(HOST,"UMS",USER_NAME,USER_PASSWORD);
    connection.connect();
    if (values) {
        connection.query(sql, [[values]], (error) => {
            if (error) throw error;
            connection.end();
        });
    }
    else {
        connection.query(sql, (error) => {
            if (error) throw error;
            connection.end();
        });
    }
}




function select(sql, callBackFunction) {
    let connection = createConnection(HOST,"UMS",USER_NAME,USER_PASSWORD);
    connection.connect();
    connection.query(sql, (error,data) => {
        if (error) throw error;
        return callBackFunction(data);
    });
}




function remove(sql) {
    let connection = createConnection(HOST,"UMS",USER_NAME,USER_PASSWORD);
    connection.connect();
    connection.query(sql, (error) => {
        if (error) throw error;
        connection.end();
    });
}



function update(sql, values) {
    let connection = createConnection(HOST,"UMS",USER_NAME,USER_PASSWORD);
    connection.connect();
    if (values) {
        connection.query(sql, [[values]], (error) => {
            if (error) throw error;
            connection.end();
        });
    }
    else {
        connection.query(sql, (error) => {
            if (error) throw error;
            connection.end();
        })
    }
}




module.exports = {
    HOST,USER_NAME,USER_PASSWORD,
    createDataBase,
    createTable,
    insert,
    select,
    remove,
    update,
    config
};