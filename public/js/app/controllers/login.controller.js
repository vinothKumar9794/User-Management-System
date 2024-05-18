

app.controller("loginController", function($scope, UserInterface, Validation) {
    $scope.inputFields = app.inputFields;
    $scope.setIcon = UserInterface.setIcon;
    $scope.check = Validation.check;

    $scope.submit = submit;


});


function submit($event) {
    let array = [];
    const submitButton = $event.target;
    const signUpFrom = submitButton.parentElement;
    const inputelements = signUpFrom.querySelectorAll("input");
    
    if (inputelements[0].name == "email") array.push(controller.checkEmail(inputelements[0]));
    if (inputelements[1].name == "password") array.push(controller.checkPassword(inputelements[1]));

    if (true) $event.preventDefault();
    else $event.stopPropagation();
}