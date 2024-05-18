
import { Controller } from "../../modules/Controller.js";

const controller = new Controller();


app.service("Validation", function() {
    this.check = check;
});


function check($event) {
    const inputelement = $event.target;
    if (inputelement.name == "name") controller.checkName(inputelement);
    if (inputelement.name == "email") controller.checkEmail(inputelement);
    if (inputelement.name == "password") controller.checkPassword(inputelement);
    if (inputelement.name == "confirmPassword") controller.checkConfirmPassword(inputelement);
}