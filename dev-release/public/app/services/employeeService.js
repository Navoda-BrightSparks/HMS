/**
 * Created by kumaran on 24/09/2017.
 */
'use strict';

angular.module('BlurAdmin.OPD')
    .factory('EmployeeService', ['$http',
    function ($http) {
        return {
            get: () => $http.get('/employee').then(response => response.data),
            getById: id => $http.get('/employee/' + id).then(response => response.data),
            addEmployee: addEmp => $http.post('/employee/employeeRegistration', addEmp).then(response => response.data),
            upEmployee:(id)=>$http.put('/employee/' + id).then(response => response.data),
            delEmployee:(id)=>$http.delete('/employee/' + id).then(response => response.data)

        };
    }]);
