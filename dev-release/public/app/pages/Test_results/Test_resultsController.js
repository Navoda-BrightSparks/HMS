/**
 * Created by admin on 10/20/2017.
 */


angular.module('LAB.Test_results').controller('Test_resultsCtrl', ['$location','$scope', '$routeParams', 'labService',
    function ($location,$scope, $routeParams, labService) {

        $scope.enterResults = () => {


            Test_name={
                name:$scope.Test_results


            }
            labService.enterResults(specimen).then(() => {
                console.log('specimen added');
                $scope.speciman='';

            });
        };
    }]);
