angular.module('app.controllers', [])

    .controller('registerCtrl', ['$scope', '$stateParams', '$http', '$state',

        function($scope, $stateParams, $http, $state) {

            function encodeQueryData(data) {
                let ret = [];
                for (let d in data)
                    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
                return ret.join('&');
            }

            $scope.user = {};

            $scope.signup = function() {

                $http({
                        method: 'POST',
                        url: 'http://buyminus.com/ca3/rest/register-customer?' + encodeQueryData($scope.user),
                        // headers : {'Access-Control-Allow-Origin': '*'} 
                    })
                    .success(function(data) {
                        console.log(data);

                        $state.go('home');

                    }, function error(data) {
                        console.log(data);
                    });
            };


        }
    ])

    .controller('homeCtrl', ['$scope', '$stateParams',

        function($scope, $stateParams) {


        }
    ])