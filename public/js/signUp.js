
import { Controller } from "./modules/Controller.js";
import { Request } from "./modules/Request.js";

const controller = new Controller();
const request = new Request();

let signForm = document.forms[0];
let inputElements = signForm.querySelectorAll("input");


//reset form
window.addEventListener("load",() => {
    controller.resetForm(signForm)
});




signForm.addEventListener("click", (event) => {

    if (event.target.className == "eye-icon") {
        let imageElement = event.target;
        let inputElement = imageElement.parentElement.querySelector("input");
        controller.setIcon(inputElement, imageElement, "/images/icons/eye-close-icon.png", "/images/icons/eye-open-icon.png");
    }
});


//validate inputelements blur event
for (let inputElement of inputElements) {
    inputElement.addEventListener("blur", () => {
        if (inputElement.name == "name") controller.checkName(inputElement);
        if (inputElement.name == "email") controller.checkEmail(inputElement);
        if (inputElement.name == "password") controller.checkPassword(inputElement);
        if (inputElement.name == "confirmPassword") controller.checkConfirmPassword(inputElement);
    });
}



signForm.addEventListener("submit", (event) => {

    let array = [];

    for (let inputElement of inputElements) {
            if (inputElement.name == "name") array.push(controller.checkName(inputElement));
            if (inputElement.name == "email") array.push(controller.checkEmail(inputElement));
            if (inputElement.name == "password") array.push(controller.checkPassword(inputElement));
            if (inputElement.name == "confirmPassword") array.push(controller.checkConfirmPassword(inputElement));
    }

    if (controller.isTrue(array)) {
        let email = inputElements[1].value.trim();
        let requestURL = "/ums/v1/signUp";
        let data = `email=${email}`;
        let response = request.post(requestURL, false, data);
        let isEmailAlreadyExists = JSON.parse(response.responseText).email;

        if (isEmailAlreadyExists) {
            array.push(true);
        }
        else {
            array.push(false);
            controller.warning(inputElements[1], true, "Email Already Exists");
        }
    }


    if (!controller.isTrue(array)) event.preventDefault();
    else event.stopPropagation();

});