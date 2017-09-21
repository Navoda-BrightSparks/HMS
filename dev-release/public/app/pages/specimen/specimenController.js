

angular.module('LAB.specimen').controller('specimenCtrl', ['$location','$scope', '$routeParams', 'labService',
    function ($location,$scope, $routeParams, labService) {

        $scope.addSpecimen = () => {

specimen={
    name:$scope.speciman


}
            labService.addSpecimen(specimen).then(() => {
                console.log('specimen added');
                $scope.speciman='';

            });
        };
        $scope.UpadateSpecimen=(sid)=>{
            labService.getSpecimen(sid).then((specimen)=>{
                $scope.sp=specimen;
            });

        }





    }]);