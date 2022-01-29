var app = angular.module("myApp", []).controller("namesCtrl", ($scope) => {
    $scope.names = [{ name: 'Marco', country: 'CDMX' },
                    { name: 'Angye', country: 'USA' },
                    { name: 'Santiago', country: 'Brasil' },
                    { name: 'Sonia', country: 'Canada' }];


});