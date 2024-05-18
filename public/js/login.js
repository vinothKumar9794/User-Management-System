
import { Controller } from "./modules/Controller.js";
import { Request } from "./modules/Request.js";

const controller = new Controller();
const request = new Request();

let loginForm = document.forms[0];
let inputElements = loginForm.querySelectorAll("input");




//reset form
window.addEventListener("load",() => {
    controller.resetForm(loginForm)
});




loginForm.addEventListener("click", (event) => {

    if (event.target.className == "eye-icon") {
        let imageElement = event.target;
        let inputElement = imageElement.parentElement.querySelector("input");
        controller.setIcon(inputElement, imageElement, "/images/icons/eye-close-icon.png", "/images/icons/eye-open-icon.png");
    }
});


//validate inputelements blur event
for (let inputElement of inputElements) {
    inputElement.addEventListener("blur", () => {
        if (inputElement.name == "email") controller.checkEmail(inputElement);
        if (inputElement.name == "password") controller.checkPassword(inputElement);
    });
}


//submit event

loginForm.addEventListener("submit", (event) => {

    let array = [];

    for (let inputElement of inputElements) {
            if (inputElement.name == "email") array.push(controller.checkEmail(inputElement));
            if (inputElement.name == "password") array.push(controller.checkPassword(inputElement));
    }

    if (controller.isTrue(array)) {
        let email = inputElements[0].value.trim();
        let password = inputElements[1].value.trim();
        let requestURL = `/ums/v1/login`;
        let data = `email=${email}&password=${password}`;
        let response = request.post(requestURL, false, data);
        let loginStatus = JSON.parse(response.responseText);

        if (loginStatus.email && loginStatus.password) {
            location.replace("/ums/v1/home");
        }
        else if (!loginStatus.email && !loginStatus.password) {
            array.push(false);
            controller.warning(inputElements[0], true, "Email not exists");
            controller.warning(inputElements[1], true, "Password not exists");
        } 
        else if (loginStatus.email && !loginStatus.password) {
            array.push(false);
            controller.warning(inputElements[0], false, "");
            controller.warning(inputElements[1], true, "Password is wrong");
        }

    }   

    console.log(array);

    if (!controller.isTrue(array)) event.preventDefault();
    else event.stopPropagation();
});



