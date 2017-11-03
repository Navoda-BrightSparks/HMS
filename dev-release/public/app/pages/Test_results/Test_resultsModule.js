
(function () {
    'use strict';

    angular.module('LAB.TestResult', ['ngRoute'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('TestResults', {
                url: '/TestResults',
                templateUrl: 'app/pages/Test_results/Test_results.html',
                controller:'Test_resultsCtrl',
                title: 'Test Results',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 1,
                },
            });
    }

})();

