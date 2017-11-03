
'use strict';

angular.module('BlurAdmin.OPD').factory('supplierService', ['$http',
    function ($http) {
        return {
            get: () => $http.get('/supplier').then(response => response.data),
            getById: id => $http.get('/supplier/' + id).then(response => response.data),
            addSupplier: addEmp => $http.post('/supplier/supplierRegistration', addSup).then(response => response.data),
            updateSupplier:(id)=>$http.put('/supplier/' + id).then(response => response.data)
            

        };
    }]);
