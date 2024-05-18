import { Controller } from "../../modules/Controller.js";

const controller = new Controller();

app.service("UserInterface", function() {
    this.setIcon = setIcon;
});



function setIcon($event, oldPath, newPath) {
    const imageElement = $event.target;
    const inputelement = controller.getSibling(imageElement, "input");
    controller.setIcon(inputelement, imageElement, oldPath, newPath);
}