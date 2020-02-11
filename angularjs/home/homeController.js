(function () {

    var homeModule = angular.module('homeModule', []);

    homeModule.controller('homeController', function ($scope) {
        
        $scope.msg = 'Pozdrav od Home controlera'
    });
})();