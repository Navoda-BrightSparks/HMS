

angular.module('OPD.patient_registration').controller('PatientRegController', ['$location','$scope', '$stateParams', 'nurseService','PatientService',
    function ($location,$scope, $stateParams, nurseService,PatientService) {
        $scope.myDate = new Date();
        var id=$stateParams.id;
        if($stateParams.id != "undefined" || $stateParams.id !=null || $stateParams.id==''){
        function getPatient() {

            PatientService.getById($stateParams.id).then(patient => {

                $scope.patient = patient;
                $scope.patient.Birthday=new Date(patient.Birthday)
            });
        }}
        getPatient();
        $scope.required = true;
        $scope.date = new Date();
        $scope.titles = ["Baby", "Miss","Mr","Mrs","Rev"];
        $scope.sex = ["Male","Female"];
        $scope.cstatus=["Married","single"];
        $scope.bloodGroup=["A+","A-","B+","B-","AB","O+","O-"];
        $scope.addPatient = (patient) => {
            $scope.required = true;
            var day = new Date();
            var time = day.getTime();
            patient.HIN=time;
            nurseService.addPatient(patient).then(() => {
                $location.url("/home/nurse/addtoQueue").replace();

            });
        };
        $scope.editPatient = (patient) => {

            nurseService.updatePatient(id,patient).then(() => {
                $location.url("/home/nurse/addtoQueue").replace();

            });
        };



    }]);