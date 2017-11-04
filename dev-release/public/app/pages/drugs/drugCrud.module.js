
(function () {
    'use strict';

    angular.module('OPD.drugCrud', ['ngRoute'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('drugCrud', {
                url: '/drug',
                templateUrl: 'app/pages/drugs/drugsCrud.html',
                controller:'DrugsCrudController',
                title: 'Drugs',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 1,
                },
            });
    }

})();
