/*global angular*/
(function () {

    var router = function ($routeProvider) {

        
        var baseUrl = 'app/modules/';

        // Home
        $routeProvider.when('/cartera', {
            templateUrl: baseUrl + 'cartera/views/cartera.view.html',
            controller: 'CarteraController'
        });

        // http
        $routeProvider.when('/http', {
            templateUrl: baseUrl + 'http/views/http.view.html',
            controller: 'HTTPController'
        });

        // ui
        $routeProvider.when('/ui', {
            templateUrl: baseUrl + 'ui/views/ui.view.html',
            controller: 'UIController'
        });
        
    };

    router.$inject = ['$routeProvider'];
    angular.module('app').config(router);

})();