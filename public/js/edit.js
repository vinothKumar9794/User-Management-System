
import { Controller } from "./modules/Controller.js";
import { Request } from "./modules/Request.js";

const controller = new Controller();
const request = new Request();


let editForm = document.forms[0];
let inputElements = editForm.querySelectorAll("input");
let editFormSubmitBtn = editForm.querySelector("button");


//reset form
window.addEventListener("load", () => {
    controller.resetForm(editForm)
});



editForm.addEventListener("click", (event) => {

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



editFormSubmitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let array = [];
    for (let inputElement of inputElements) {
        if (inputElement.name == "name") array.push(controller.checkName(inputElement));
        if (inputElement.name == "email") array.push(controller.checkEmail(inputElement));
        if (inputElement.name == "password") array.push(controller.checkPassword(inputElement));
        if (inputElement.name == "confirmPassword") array.push(controller.checkConfirmPassword(inputElement));
    }

    if (controller.isTrue(array)) {
        let formData = new FormData(editForm);
        let queryString = new URLSearchParams(formData).toString();
        queryString = decodeURIComponent(queryString).replace("+", " ");
        queryString = queryString.split("&");
        queryString.splice(3);
        let userID = document.URL.split("/")[7];
        let requestURL = `/ums/v1/users/${userID}`;
        let data = queryString.join("&");
        request.patch(requestURL, false, data);
        location.href = "/ums/v1/home";
    }

    else event.preventDefault();
});