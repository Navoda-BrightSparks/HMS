

angular.module('LAB.specimen').controller('specimenCtrl', ['$location','$scope', '$routeParams', 'labService',
    function ($location,$scope, $routeParams, labService) {

        $scope.addSpecimen = (specimen) => {


            labService.addSpecimen(specimen).then(() => {
                console.log('specimen added');
                sp.speciman='';

            });
        };
        $scope.UpadateSpecimen=(sid)=>{
            labService.getSpecimen(sid).then((specimen)=>{
                $scope.sp=specimen;
            });

        }





    }]);