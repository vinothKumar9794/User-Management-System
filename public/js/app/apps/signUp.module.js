
const app = angular.module("signUpApp", []);

app.textFields = [
    { 
        "name": "name", 
        "placeholder": "Enter your name . . . .",
        "imgPath": "/images/icons/user-name-icon.png" 
    },
    { 
        "name": "email", 
        "placeholder": "Enter your email . . . .", 
        "imgPath": "/images/icons/email-icon.png" 
    }
];

app.passwordFields = [
    { 
        "name": "password", 
        "placeholder": "Enter password . . . ", 
        "imgPath1": "/images/icons/lock-icon.png", 
        "imgPath2": "/images/icons/eye-close-icon.png"
    },
    { 
        "name": "confirmPassword", 
        "placeholder": "Enter confirm password . . . ", 
        "imgPath1": "/images/icons/lock-icon.png", 
        "imgPath2": "/images/icons/eye-close-icon.png" 
    }
]
