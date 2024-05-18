
export class Controller {



    setIcon(inputElement, imgElement, oldPath, newPath) {
        if (imgElement == null && inputElement == null) return;
        if (imgElement.src.match(oldPath)) {
            imgElement.src = newPath;
            inputElement.type = "text";
        }
        else {
            imgElement.src = oldPath;
            inputElement.type = "password";
        }
    }


    checkName(inputElement) {
        if (inputElement == null) return;
        let errorElement = this.getSibling(inputElement, "p");
        if (inputElement.value.trim() == "") {
            inputElement.style.border = "2px solid red";
            this.throwErrorMessage(errorElement, "Name is empty");
            return false;
        }
        else {
            inputElement.style.border = "2px solid blue";
            errorElement.innerHTML = "";
            return true;
        }
    }
 

    checkEmail(inputElement) {
        if (inputElement == null) return;
        let errorElement = this.getSibling(inputElement, "p");
        if (inputElement.value.trim() == "") {
            inputElement.style.border = "2px solid red";
            this.throwErrorMessage(errorElement, "Email is empty");
            return false;
        }
        else {
            inputElement.style.border = "2px solid blue";
            errorElement.innerHTML = "";
            return true;
        }
    }


    checkPassword(inputElement) {
        if (inputElement == null) return;
        let errorElement = this.getSibling(inputElement, "p");
        if (inputElement.value.trim() == "") {
            inputElement.style.border = "2px solid red";
            this.throwErrorMessage(errorElement, "Password is empty");
            return false;
        }
        else {
            inputElement.style.border = "2px solid blue";
            errorElement.innerHTML = "";
            return true;
        }
    }


    checkConfirmPassword(inputElement) {
        if (inputElement == null) return;
        let errorElement = this.getSibling(inputElement, "p");
        if (inputElement.value.trim() == "") {
            inputElement.style.border = "2px solid red";
            this.throwErrorMessage(errorElement, "Confirm Password is empty");
            return false;
        }
        else {
            inputElement.style.border = "2px solid blue";
            errorElement.innerHTML = "";
            return true;
        }
    }


    warning(inputElement, boolean, errorMessage) {
        let errorElement = this.getSibling(inputElement, "p");
        if (boolean) {
            inputElement.style.border = "2px solid red";
            this.throwErrorMessage(errorElement, errorMessage);
        }
        else {
            inputElement.style.border = "2px solid blue";
            errorElement.innerHTML = "";
        }
    }


    throwErrorMessage(element, errorMessage) {
        if (element == null || element == undefined) return;
        element.innerHTML = `${errorMessage} . . . .`;
    }

    getSibling(element, siblingElementName) {
        if (element == null || element == undefined) return;
        let siblingElement = element.parentElement.querySelector(siblingElementName);
        return siblingElement;
    }


    isTrue(values) {
        let flag = false;
        for (let value of values) {
            if (value) {
                flag = true;
            }
            else {
                flag = false;
                break;
            }
        }
        return flag;
    }


    resetForm(form) {
        form.reset();
    }

}