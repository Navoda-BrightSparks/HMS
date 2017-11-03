angular.module('BlurAdmin.OPD').factory('nurseService', ['$http',
    function ($http) {
        return {
            addPatient: patient => $http.post('/patients/register', patient).then(response => response.data),
            updatePatient: (id, patient) => $http.put('/patients/edit/' + id, patient).then(response => response.data),
        };
    }]);