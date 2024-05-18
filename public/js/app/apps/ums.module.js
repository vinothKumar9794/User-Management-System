
var app = angular.module("umsApp", []);

app.appTitle = "User Management System";

app.links = [
    {"content": "Home", "href": "/ums/v1/home"},
    {"content": "Login", "href": "/ums/v1/login"},
    {"content": "SignUp", "href": "/ums/v1/signUp"},
    {"content": "About", "href": "/ums/v1/home"},
];

app.records = "User Records";