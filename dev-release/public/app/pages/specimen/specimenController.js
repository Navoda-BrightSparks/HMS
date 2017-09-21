

angular.module('LAB.specimen').controller('specimenCtrl', ['$location','$scope', '$routeParams', 'labService',
    function ($location,$scope, $routeParams, labService) {

        $scope.addSpecimen = (specimen) => {


            labService.addSpecimen(specimen).then(() => {
                console.log('specimen added');

            });
        };
        $scope.UpadateSpecimen=(aid)=>{
            PatientService.getSpecimen(aid).then((specimen)=>{
                $scope.al=specimen;
            });

        }
    }]);