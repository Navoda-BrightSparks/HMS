/**
 * Created by kumaran on 31/10/2017.
 */



angular.module('OPD.userRole')

    .controller('userRoleCtrl', ['$location','$scope', '$routeParams','userRoleService',
    function ($location,$scope, $routeParams,userRoleService) {


        $scope.addUserRole = (userRoleCtrl) => {
            $scope.required = true;
            userRoleService.addUserRole(userRoleCtrl).then(() => {
                alert("Success!");
            });
        };

        $timeout(function(){

            $location.path('app/pages/employee/employeeCrud.html');
        },2000);
    }]);