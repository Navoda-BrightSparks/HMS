
angular.module('OPD.employeeCrud').controller('EmployeeCrud', ['$location','$scope', '$routeParams','EmployeeService',
    function ($scope, $routeParams,EmployeeService) {


        $scope.addEmployee = (employee) => {

            $scope.required = true;
            EmployeeService.addEmployee(employee).then(() => {
                alert("Success!");
            });
        };


    }]);