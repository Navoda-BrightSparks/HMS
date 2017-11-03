angular.module('LAB.specimen').controller('specimenCtrl', ['$location', '$scope', '$routeParams', 'labService',
    function ($location, $scope, $routeParams, labService) {

        $scope.button = false;
        $scope.addSpecimen = (specimen) => {
            labService.addSpecimen(specimen).then(() => {
                getSpecimens();

            });
        };

        $scope.editSpecimen = (specimen) => {
            $scope.button = true;
            $scope.specimen = specimen

        };
        $scope.DeleteSpecimen = (id) => {
            console.log("delete");
            labService.DeleteSpecimen(id).then(() => {
                getSpecimens()
            });
        };
        function getSpecimens() {
            labService.getSpecimens().then(specimens => {

                $scope.specimens = specimens;
            })
        }
        $scope.UpadateSpecimen = (specimen) => {

            labService.updateSpecimen(specimen._id, specimen).then(() => {
                $scope.specimen = "";
                $scope.button = false;
                getSpecimens()


            });
        };

        getSpecimens()


    }]);