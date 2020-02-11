app.directive('agSat', function ($interval) {
    return {
        restrict: 'AE',
        template: 'ovo je sat direktiva {{time}} za usera {{aguser}}',
        scope: {
            aguser: '@user'
        },
        link: function (scope, el, attr) {

            $interval(function () {
                scope.time = new Date().toLocaleString();
            }, 100);
            scope.poruka = 'AG-JS';
        }
    }
});