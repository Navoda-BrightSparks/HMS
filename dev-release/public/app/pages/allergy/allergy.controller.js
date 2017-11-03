"use strict";

angular.module('OPD.allergy').controller('AllergyController', ['$location','$scope', '$stateParams','PatientService',
    function ($location,$scope, $stateParams, PatientService) {
        $scope.button=false;
        function getPatient() {
            PatientService.getById($stateParams.id).then(patient => {
                $scope.patient = patient;
                console.log($scope.patient)
            });
        }
        getPatient();
        $scope.AddAlergy=(id,alergy)=>{
            PatientService.addAlergy(id,alergy).then((patient)=>{
                $scope.patient=patient;
                alergy.alergy='';
                alergy.remarks='';
                getPatient();
            });

        }
        $scope.UpadateAlergy=(alergyId)=>{
            PatientService.getAlergy(alergyId).then((alergy)=>{
                $scope.button=true;
                $scope.alergy=alergy;
            });

        }
        $scope.EditAlergies=(alergyId,alergy)=>{

            PatientService.updateAlergy(alergyId,alergy).then((alergy)=>{
                $scope.button=false;
                $scope.alergy.alergy='';
                $scope.alergy.remarks='';


            });
            getPatient();
        }

    }]);

