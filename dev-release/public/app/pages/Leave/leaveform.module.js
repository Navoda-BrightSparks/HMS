/**
 * Created by kumaran on 24/09/2017.
 */
(function () {
    'use strict';

    angular.module('OPD.leaveform', ['ngRoute'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('leaveform', {
                url: '/leaveform',
                templateUrl: 'app/pages/Leave/leaveform.html',
                controller:'leaveformCtrl',
                title: 'Manage Leave',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 1,
                },
            });
    }

})();