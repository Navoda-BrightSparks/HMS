/**
 * Created by kumaran on 24/09/2017.
 */
(function () {
    'use strict';

    angular.module('OPD.employeeCrud', ['ngRoute'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('employeeCrud', {
                url: '/employee',
                templateUrl: 'app/pages/employee/employeeCrud.html',
                controller:'EmployeeCrud',
                title: 'Employee',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 1,
                },
            });
    }

})();