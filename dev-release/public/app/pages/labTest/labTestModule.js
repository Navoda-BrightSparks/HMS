/**
 * Created by admin on 9/20/2017
 */

(function () {
    'use strict';

    angular.module('LAB.labTest', ['ngRoute'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('labTestManagement', {
                url: '/labTest',
                templateUrl: 'app/pages/labTest/labTest.html',
                controller:'labTestCtrl',
                title: 'Lab test Management',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 1,
                },
            });
    }

})();
