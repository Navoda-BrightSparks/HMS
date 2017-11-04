
'use strict';

angular.module('BlurAdmin.OPD').factory('drugsService', ['$http',
    function ($http) {
        return {
            get: () => $http.get('/drug').then(response => response.data),
            getById: id => $http.get('/drug/' + id).then(response => response.data),
            addDrug: addDrug => $http.post('/drug/drugRegistration', addDrug).then(response => response.data),
            //UpdateSupplier:(id)=>$http.put('/supplier/' + id).then(response => response.data)
           // UpdateSupplier:(id,supplier)=>$http.put('/supplier/'+id,supplier).then(response=>response.data),


        };
    }]);
