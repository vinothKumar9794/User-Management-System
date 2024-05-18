

app.controller("signUpController", function($scope, UserInterface, Validation) {
    $scope.textFields = app.textFields;
    $scope.passwordFields = app.passwordFields;

    // UserInterface service
    $scope.setIcon = UserInterface.setIcon;

    // Validation service
    $scope.check = Validation.check;

    $scope.submit = submit;

});


function submit($event) {
    let array = [];
    const submitButton = $event.target;
    const signUpFrom = submitButton.parentElement;
    const inputelements = signUpFrom.querySelectorAll("input");
    
    if (inputelements[0].name == "name") array.push(controller.checkName(inputelements[0]));
    if (inputelements[1].name == "email") array.push(controller.checkEmail(inputelements[1]));
    if (inputelements[2].name == "password") array.push(controller.checkPassword(inputelements[2]));
    if (inputelements[3].name == "confirmPassword") array.push(controller.checkConfirmPassword(inputelements[3]));

    if (true) $event.preventDefault();
    else $event.stopPropagation();
}