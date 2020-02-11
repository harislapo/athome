(function () {

    var productModule = angular.module('productModule', []);

    productModule.controller('productAdminController', function (loginService) {
        console.log(loginService.findAll());
        
    });
})();