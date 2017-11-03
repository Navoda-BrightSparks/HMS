
angular.module('OPD.leaveform')

    .controller('leaveformCtrl', ['$location','$scope', '$routeParams','leaveformService',
        function ($location,$scope, $routeParams,leaveformService) {


            $scope.addleave = (leaveformCtrl) => {
                $scope.required = true;
                leaveformService.addleave(leaveformCtrl).then(() => {
                    alert("Success!");
                });
            };

            $timeout(function(){

                $location.path('app/pages/Leave/leaveform.html');
            },2000);
        }]);
