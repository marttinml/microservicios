/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $routeParams, $compile) {

        // $scope.toDetail = false;
        // $scope.detail = {};
        $scope.showDetail = function(obj, id){
            
                obj.toDetail =  true;
                var element = document.getElementById(id);
                var elementCloned =  element.cloneNode(true);
                elementCloned.classList.add('wrapper-item-cloned');
                elementCloned.setAttribute('id', id + 'cloned');
                elementCloned.removeAttribute('ng-repeat');
                elementCloned.childNodes[1].setAttribute('ng-click','hideDetail("'+id+'cloned'+'")');
                elementCloned.style.top = (element.offsetTop - 10) + 'px';

                var linkFn = $compile(angular.element(elementCloned));
                var content = linkFn($scope);
                var elementContent = angular.element(document.getElementById("contentItems")).append(content);
                
                // Animation
                setTimeout(() => {
                    elementCloned.classList.add('transition');
                }, 100);

                console.log('In');
        };

        $scope.hideDetail = function(id){
            console.log(id);
        };

       $scope.cartera = {
        "color":"yellow",
        "titulo":"CARTERA",
        "career":"UNEFON",
        "fechaCorte": "07 de Octubre",
        "proximaAsignacion": "27 días",
        "grupos": [{
            "icon": "att-internet-slim",
            "nombre": "Internet",
            "disponible": "6 GB",
            "limitado": {
                "incluido": "14 GB",
                "consumido": "7 GB",
                "disponible":"6 GB",
                "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga",
            },
            "bolsas":[{
                    "nombre": "Internet Incluido en plan",
                    "incluido": "4 GB",
                    "fechaExpiracion": "21/10/2019",
                    "congelado": false
                },
                {
                    "nombre": "Internet Promoción",
                    "incluido": "4 GB",
                    "fechaExpiracion": "21/10/2019",
                    "congelado": false
                }
            ]
        },
        {
            "icon": "att-group-slim",
            "nombre": "Redes Sociales",
            "disponible": "···",
            "ilimitado": {
                "incluido": "Ilimitado",
                "consumido": "1 GB",
                "descripcion": "Esta bolsa te la puedes gastar en FB TW WA SP INS UB",
            },
            "limitado": {
                "incluido": "2 GB",
                "consumido": "0 GB",
                "disponible":"2 GB",
                "descripcion": "Esta bolsa te la puedes gastar en FB TW WA SP INS UB",
            },
            "bolsas":[{
                    "nombre": "Redes Sociales incluidas",
                    "incluido": "2 GB",
                    "fechaExpiracion": "21/10/2019",
                    "congelado": false
                },
                {
                    "nombre": "Redes sociales",
                    "incluido": "Ilimitado",
                    "fechaExpiracion": "21/10/2019",
                    "congelado": false
                }
            ]
        },
        {
            "icon": "att-messaging-slim",
            "nombre": "Mensajes",
            "disponible": "Ilimitado",
            "limitado": {
                "incluido": "Ilimitado",
                "consumido": "42 Mensajes",
                "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga",
            },
            "bolsas":[{
                    "nombre": "Internet Incluido en plan",
                    "incluido": "4 GB",
                    "fechaExpiracion": "21/10/2019",
                    "congelado": false
                },
                {
                    "nombre": "Internet Promoción",
                    "incluido": "4 GB",
                    "fechaExpiracion": "21/10/2019",
                    "congelado": false
                }
            ]
        },
        {
            "icon": "att-caller-history-slim",
            "nombre": "Llamadas",
            "disponible": "Ilimitadas",
            "illimitado": {
                "incluido": "Ilimitado",
                "consumido": "42 min",
                "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga",
            },
            "bolsas":[{
                    "nombre": "Minutos incluidos comunidad AT&T",
                    "incluido": "Ilimitado",
                    "fechaExpiracion": "21/10/2019",
                    "congelado": false
                },
                {
                    "nombre": "Minutos incluidos otros destinos",
                    "incluido": "Ilimitado",
                    "fechaExpiracion": "21/10/2019",
                    "congelado": false
                }
            ]
        }]
    };

    };
    controller.$inject = ['$scope','$rootScope','$routeParams', '$compile'];
    angular.module('app').controller('CarteraController', controller);

})();