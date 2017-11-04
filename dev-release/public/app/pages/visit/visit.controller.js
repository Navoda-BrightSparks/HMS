'use strict';

angular.module('OPD.visit').controller('VisitsController', ['$location','$scope', '$stateParams','$rootScope','$uibModal', 'PatientService',
    function ($location,$scope, $stateParams, $rootScope,$uibModal,PatientService) {
        function setVisitEnv(){
            $scope.date = new Date();
            $scope.types = ["OPD", "Clinic"];
            $scope.addVisit = (id, visit) => {
                var date = new Date();
                var time = date.getTime();
                visit.vid=time;
                visit.date=date;
                PatientService.addVisit(id, visit).then((patient) => {
                    console.log(visit.date);
                    console.log(patient);
                    $scope.patient = patient;
                    visit.complaint = '';
                    visit.visitType='';
                    visit.remarks='';
                    $location.path('/channel/'+patient._id);
                });
            };
        }

        function getPatient() {
            if($stateParams.id){

                PatientService.getById($stateParams.id).then(patient => {
                    $scope.patient = patient;
                    setVisitEnv();
                });
            }else{
                $location.replace('/home');
            }
        }

        getPatient();

  /*      $scope.AddAlergy = (id, allergy) => {
            PatientService.addAlergy(id, allergy).then((patient) => {
                $scope.patient = patient;
                allergy.alergy = '';
                allergy.remarks = '';
                getPatient();
            });

        };

        $scope.UpadateAlergy = (aid) => {
            PatientService.getAlergy(aid).then((alergy) => {
                $scope.al = alergy;
            });
        };
        $scope.EditAlergies = (aid, allergy) => {
            PatientService.updateAlergy(aid, allergy).then((alergy) => {

                allergy.alergy = '';
                allergy.remarks = '';
            });
            getPatient();
        };

        $scope.DeleteAlergy = (id) => {
            PatientService.deleteAlergy(id).then(() => {
                getPatient();
            });
        };*/

        $scope.open = function (page, size) {
            $rootScope.modalInstance =$uibModal.open({
                animation: true,
                templateUrl: page,
                controller: 'SearchController',
                scope: $scope,
                size: size,
                resolve: {
                    items:()=> {
                        return $scope.items;
                    }
                }
            });
        };
        $scope.close=()=>{
            $scope.opdNo="";
            $rootScope.modalInstance.close('a');
        }
    }]);