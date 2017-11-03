/**
 * Created by kumaran on 24/09/2017.
 */
'use strict';

angular.module('BlurAdmin.OPD')
    .factory('leaveformService', ['$http',
        function ($http) {
            return {
                get: () => $http.get('/leaveform').then(response => response.data),
                getById: id => $http.get('/leaveform/' + id).then(response => response.data),
                addLeave: addleave => $http.post('/leaveform/leaveformManage', addleave).then(response => response.data),
                upLeave:(id)=>$http.put('/leaveform/' + id).then(response => response.data),
                delLeave:(id)=>$http.delete('/leaveform/' + id).then(response => response.data)

            };
        }]);
