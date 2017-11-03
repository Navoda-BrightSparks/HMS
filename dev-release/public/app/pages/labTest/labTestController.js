

angular.module('LAB.labTest').controller('labTestCtrl', ['$location','$scope', '$routeParams', 'labService',
    function ($location,$scope, $routeParams, labService) {

        $scope.addlabTest = (labTest) => {
            labService.addlabTest(labTest).then(() => {
                console.log('labTest added');

            });
        };

        $scope.UpadatelabTest=(labTest)=> {
            labService.getlabTest(labTest).then((labTest) => {
                $scope.sp = labTest;
            });
        }
            $scope.DeletelabTest = (id) => {
                labService.DeletelabTest(id).then(() => {
                    //getPatient();
                });
            }

         }]);/**
 * Created by admin on 9/20/2017.
 */
