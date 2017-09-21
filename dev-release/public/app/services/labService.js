'use strict';

angular.module('BlurAdmin.OPD').factory('labService', ['$http',
    function ($http) {
        return {

            addSpecimen: specimen => $http.post('/Lab/specimen', specimen).then(response => response.data),
            addlabTest: labTest => $http.post('/Lab/labTest', labTest).then(response => response.data),
            updateSpecimen:(id,specimen)=>$http.put('/Lab/specimen'+id,specimen).then(response=>response.data),

        };
    }]);