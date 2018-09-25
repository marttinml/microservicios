/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $routeParams, $compile) {

        // $scope.toDetail = false;
        // $scope.detail = {};
        $scope.showDetail = function(item, id){

            $scope.item = item;
            var element = document.getElementById(id);
            var elementCloned =  element.cloneNode(true);
            elementCloned.classList.add('wrapper-item-cloned');
            elementCloned.setAttribute('id', id + 'cloned');
            elementCloned.removeAttribute('ng-repeat');
            elementCloned.childNodes[1].setAttribute('ng-click','hideDetail("'+id+'cloned'+'", '+element.offsetTop+')');
            elementCloned.style.top = (element.offsetTop - 10) + 'px';

            var linkFn = $compile(angular.element(elementCloned));
            var content = linkFn($scope);
            var elementContent = angular.element(document.getElementById("contentItems")).append(content);
            
            // Animation
            setTimeout(() => {
                elementCloned.classList.add('transition');
            }, 100);

        };

        $scope.showConsumos = function(id){
            var element = document.getElementById(id);
            var elementCloned =  element.cloneNode(true);
            elementCloned.classList.add('wrapper-item-cloned');
            elementCloned.setAttribute('id', id + 'cloned');
            elementCloned.childNodes[1].setAttribute('ng-click','hideConsumos("'+id+'cloned'+'", '+element.offsetTop+')');
            elementCloned.style.top = (element.offsetTop - 10) + 'px';

            var linkFn = $compile(angular.element(elementCloned));
            var content = linkFn($scope);
            var elementContent = angular.element(document.getElementById("contentItems")).append(content);
            
            // Animation
            setTimeout(() => {
                elementCloned.classList.add('transition');
            }, 100);

        };

        $scope.hideDetail = function(id, top){
            var el = document.getElementById(id);
            el.classList.remove('transition');
        
            setTimeout(() => {
                $scope.item = {};
                el.remove();
            }, 300);
        };

        $scope.hideConsumos = function(id, top){
            var el = document.getElementById(id);
            el.classList.remove('transition');
        
            setTimeout(() => {
                el.remove();
            }, 300);
        };

        $scope.getColums = function(obj){
            var col = 0;
            col += obj.limitado ? 1 : 0;
            col += obj.ilimitado ? 1 : 0;
            col += obj.bolsas ? 1 : 0;
            col += obj.saldo ? 1 : 0;
            col += obj.beneficios ? 1 : 0;
            col += obj.monedas ? 1 : 0;
            return 'col-' + col;
        };

        $scope.resetTabs = function(tabs){
            for(var i in tabs){
                tabs[i] = false;
            }
        };

       $scope.cartera = {
        "color":"yellow",
        "titulo":"CARTERA",
        "career":"UNEFON",
        "fechaCorte": "07 de Octubre",
        "proximaAsignacion": "27 días",
        "grupos": [
            {
                "icon": "att-money-slim",
                "nombre": "Saldo Total",
                "disponible": "$220",
                "saldo": {
                    "saldo": "$20",
                    "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga",
                },
                "beneficios": {
                    "saldo": "$200",
                    "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga",
                }
            },
            {
                "icon": "att-a-slim",
                "nombre": "Monedas",
                "disponible": "$0",
                "monedas": {
                    "saldo": "$0",
                    "descripcion": "Saldo otorgado al realizar una recarga que sirve para adquirir cualquier servicio durante la vigencia de la recarga",
                }
            },
            {
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
            "ilimitado": {
                "incluido": "Ilimitado",
                "consumido": "42 SMS",
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
            "ilimitado": {
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

    for(var i in $scope.cartera.grupos){
        var obj = $scope.cartera.grupos[i];
        obj.tabs = { limitado: false, illimitado: false, bolsas: false, saldo: false, beneficios: false, monedas: false  };

        if(obj.ilimitado){
            obj.tabs.ilimitado = true;
        }else{
            if(obj.limitado){
                obj.tabs.limitado = true;
            }else{
                if(obj.bolsas){
                    obj.tabs.bolsas = true;
                }else{
                    if(obj.saldo){
                        obj.tabs.saldo = true;
                    }else{
                        if(obj.beneficios){
                            obj.tabs.beneficios = true;
                        }else{
                            if(obj.monedas){
                                obj.tabs.monedas = true;
                            }
                        }
                    }
                }
            }
        }
    };

    console.log($scope.cartera);

    };
    controller.$inject = ['$scope','$rootScope','$routeParams', '$compile'];
    angular.module('app').controller('CarteraController', controller);

})();