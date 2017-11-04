/**
 * Created by kumaran on 31/10/2017.
 */
(function () {
    'use strict';

    angular.module('OPD.userRole', ['ngRoute'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('userRole', {
                url: '/userRole',
                templateUrl: 'app/pages/userroles/userRole.html',
                controller:'userRoleCtrl',
                title: 'userRole',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 1,
                },
            });
    }

})();