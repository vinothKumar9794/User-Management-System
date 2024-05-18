

const app = angular.module("loginApp", []);

app.inputFields = [
    {   
        "type": "text",
        "name": "email", 
        "placeholder": "Enter email . . . ", 
        "imgPath1": "/images/icons/email-icon.png" 
    },
    {   
        "type": "password",
        "name": "password", 
        "placeholder": "Enter password . . . ", 
        "imgPath1": "/images/icons/lock-icon.png" ,
        "imgPath2": "/images/icons/eye-close-icon.png"
    }
];