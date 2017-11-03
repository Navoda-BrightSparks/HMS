

angular.module('LAB.labTest').controller('labTestCtrl', ['$location','$scope', '$routeParams', 'labService',
    function ($location,$scope, $routeParams, labService) {
$scope.button=false;
        $scope.addlabTest = (labTest) => {
            labService.addlabTest(labTest).then(() => {
                getLabTests()

            });
        };
        getLabTests();
        $scope.editlabTest=(labTest)=> {
            $scope.button=true;
          $scope.labTest=labTest

        };
            $scope.DeletelabTest = (id) => {
                labService.DeletelabTest(id).then(() => {
                    getLabTests()
                });
            };
        function getLabTests() {
            labService.getLabTests().then(LabTests=>{
                console.log(LabTests);
                $scope.LabTests=LabTests;
            })
        }
        $scope.UpadatelabTest = (labTest) => {

            labService.updatelabTest(labTest._id,labTest).then(() => {
                $scope.labTest="";
                $scope.button=false;
                getLabTests()

            });
        };

        getLabTests()
         }]);