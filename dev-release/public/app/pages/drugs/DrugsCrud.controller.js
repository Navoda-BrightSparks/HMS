

angular.module('OPD.drugCrud').controller('DrugsCrudController', ['$location','$scope', '$routeParams', 'drugsService',
    function ($location,$scope, $routeParams, drugsService) {
        $scope.myDate = new Date();
        function getdrugs() {

            drugsService.get().then(drug => {
                $scope.druglist = drug;
            });
        }
        getdrugs();
        $scope.required = true;
        $scope.date = new Date();
        $scope.addDrug = (drug) => {

            $scope.required = true;
            var d = new Date();
            var n = d.getTime();
console.log(drug)
            drugsService.addDrug(drug).then(() => {

                alert("Success!");


            });
        };
    }]);