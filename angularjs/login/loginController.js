(function () {

    var loginModule = angular.module('loginModule', []);

    loginModule.controller('loginController', function ($scope, loginService) {

        $scope.loggedUser = 'Emin Sahovic'
        $scope.isLogged = loginService.checkLogIn('admin, 123');
        loginService.insert('Amir Ramic');
    });
})();