'use strict';

// Declare app level module which depends on views, and components
var app = angular.module("myApp", ['ngStorage','ngRoute'])




app.factory("myProvider",function(){
   // console.log("factory function");
    return new ApiUrl();

});

    app.config (function($routeProvider ,$provide){
   //$locationProvider.html5Mode(true);
    $routeProvider.when("/",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/inicio.html", controller:'LoginController'});
    $routeProvider.when("/newEmpresa",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/Empresa/ingresarEmpresa.html", controller:'EmpresaController'});
    $routeProvider.when("/newHistory",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/HistoriaClinica/newClinicHistory.html", controller:'HistoriaClinicaController'});
    $routeProvider.when("/first",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/HistoriaClinica/first.html", controller:'HistoriaClinicaController'});
    $routeProvider.when("/second",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/HistoriaClinica/second.html", controller:'HistoriaClinicaController'});

        /*$provide.factory("ApiUrl", function () {
            return {
                urlUsuarios: 'http://localhost:3000/api/usuarios'
            };
        })*/

        //$provide.value('urlUsuarios', 'http://localhost:3000/api/usuarios');




});



//('urlUsuarios', 'http://localhost:3000/api/usuarios');



    /*app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/newEmpresa', { templateUrl: '/tesisSaludOcupacional/Client/Administrator/newEmpresa.html', controller: 'EmpresaController' });
        $routeProvider.when('/', { templateUrl: '/indexAdmin.html' });
        $routeProvider.otherwise({ redirectTo: '/error' });

    }]);*/

