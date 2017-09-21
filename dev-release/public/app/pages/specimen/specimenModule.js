// * Created by greshan on 5/18/2017.
(function () {
    'use strict';

    angular.module('LAB.specimen', ['ngRoute'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('specimenManagement', {
                url: '/Specimens',
                templateUrl: 'app/pages/specimen/specimen.html',
                controller:'specimenCtrl',
                title: 'Specimen Management',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 1,
                },
            });
    }

})();
