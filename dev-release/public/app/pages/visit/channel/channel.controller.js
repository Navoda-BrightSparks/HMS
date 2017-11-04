'use strict';

angular.module('OPD.channel').controller('ChannelController', ['$location','$scope','$stateParams', 'PatientService','toastr','labService',
    function ($location,$scope,$stateParams, PatientService,toastr,labService) {
        $scope.laborders=["sam","fasting blood sugar","Random blood sugar","PPBS","Blood sugs","Urine Full report","Urine Sugar","PT-INR","Reticulocyte count","CSF full report","Aspiration fluid full report","Dengue IgG-IgM Ab"];
       $scope.priority=["high","medium","low"];
       $scope.frequencies=["B.i.d","tbd","tbdt"];
       $scope.frequency="";
       const reply=200;
        $scope.parseFloat = function(value){
            return parseFloat(value);
        };
        function getvisit() {
            PatientService.getVisitById($stateParams.id).then(visit => {
                $scope.vvisit = visit;

            });
        }
        function getLabTests() {
            labService.getLabTestNames().then(LabTests=>{
console.log(LabTests);
                $scope.LabTests=LabTests;
            })
        }
        getLabTests();
        function displayToast(message,title,type) {
            toastr.success(title, message, {
                "autoDismiss": true,
                "positionClass": "toast-top-full-width",
                "type": type,
                "timeOut": "3000",
                "extendedTimeOut": "500",
                "allowHtml": false,
                "closeButton": false,
                "tapToDismiss": true,
                "progressBar": false,
                "newestOnTop": true,
                "maxOpened": "3",
                "preventDuplicates": false,
                "preventOpenDuplicates": false
            })

        }
        getvisit();
        $scope.addExamination=(id,Examination)=>{
            PatientService.addExamination(id,Examination).then(reply=>{

                if(reply==reply){
                    displayToast('Success','Examinations saved successfully','success');
                }
            });
        };

        $scope.addLaborder=(id,lab)=>{
lab.testName=lab.testName.name;
console.log(lab.testName);
            PatientService.addLaborder(id,lab).then(reply=>{
                if(reply==reply){
                    displayToast('Success','Lab Orders saved successfully','success');
                }
            });
        };

        $scope.prescription=[];
        $scope.getDrugs=function(name) {
            PatientService.getdrugs(name).then(response => {
                $scope.drugs=null;
                let data=response.data.drugGroup.conceptGroup;
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        console.log(data[key]);
                        if(data[key].conceptProperties){
                            $scope.drugs=data[key].conceptProperties;
                            break;
                        }
                    }
                }
            })

        };
        $scope.remove = function(){
            var newDataList=[];
            $scope.selectedAll = false;
            angular.forEach($scope.prescription, function(selected){
                if(!selected.selected){
                    newDataList.push(selected);
                }
            });
            $scope.prescription = newDataList;
        };
        $scope.getname=function(name){
            $scope.drugName=name;
        };
        $scope.addMedicine=function (frequency,drugname,period) {

            $scope.prescription.push({'drugname':drugname,'frequency':frequency,'Period':period});
            $scope.drugName="";
            $scope.frequency="";
            $scope.period="";
        };
        $scope.addprescription=(id,prescription)=>{
            var newDataList=[];

            PatientService.addprescription(id,prescription ).then(reply=>{
                if(reply==reply){
                    $scope.prescription = newDataList;

                    displayToast('Success','prescription saved successfully','success');
                }
            });
        };
        $scope.print=function () {
            printJS({printable: $scope.prescription, properties: ['drugname', 'frequency', 'Period'], type: 'json'})
        };
    }]);