/**
 * Created by kumaran on 24/09/2017.
 */
'use strict';

angular.module('BlurAdmin.OPD')
    .factory('userRoleService', ['$http',
        function ($http) {
            return {
                get: () => $http.get('/userRole').then(response => response.data),
                getById: id => $http.get('/userRole/' + id).then(response => response.data),
                addUserRole: adduRole => $http.post('/userRole/userRoleAdd', adduRole).then(response => response.data),
                updateUserRole:(id)=>$http.put('/userRole/' + id).then(response => response.data),
                deleteUserRole:(id)=>$http.delete('/userRole/' + id).then(response => response.data)

            };
        }]);