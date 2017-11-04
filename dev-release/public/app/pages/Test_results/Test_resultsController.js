angular.module('LAB.TestResult').controller('Test_resultsCtrl', ['$location', '$scope', '$routeParams', 'labService','$uibModal',
    function ($location, $scope, $routeParams, labService,$uibModal) {
        function getTestResults() {
            labService.labOrders().then(labOrders => {
                $scope.labOrders = labOrders;
            });
        }
        getTestResults()
        $scope.open = function (page, size,order,id) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,
                controller: 'Test_resultsCtrl',
                scope:$scope,

            });

            $scope.order=order
            $scope.vid=id
        };

        $scope.enterResult = (result) => {
            PatientService.addAlergy(id, al).then((patient) => {
                console.log(al);
                $scope.patient = patient;
                al.alergy = '';
                al.remarks = '';
                getPatient();
            });

        };

}]);
