'use strict';

angular.module('BlurAdmin.OPD').factory('labService', ['$http',
    function ($http) {
        return {

            addSpecimen: specimen => $http.post('/Lab/specimen', specimen).then(response => response.data),
            addlabTest: labTest => $http.post('/Lab/labTest', labTest).then(response => response.data),
            updateSpecimen:(id,specimen)=>$http.put('/Lab/specimen'+id,specimen).then(response=>response.data),
			updatelabTest:(id,labtest)=>$http.put('/Lab/editlabTest/'+id,labtest).then(response=>response.data),
            DeletelabTest:(id)=>$http.delete('/Lab/removeLabTest/'+id).then(response=>response.data),
            enterResults: Test_results => $http.post('/Lab/Test_results', Test_results).then(response => response.data),
            getLabTests: () => $http.get('/Lab/labTest').then(response => response.data),
        };
    }]);