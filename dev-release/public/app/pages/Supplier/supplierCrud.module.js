
(function () {
    'use strict';

    angular.module('OPD.supplierCrud', ['ngRoute'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('supplierCrud', {
                url: '/supplier',
                templateUrl: 'app/pages/Supplier/supplierCrud.html',
                controller:'SupplierCrudController',
                title: 'Supplier registration',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 1,
                },
            });
    }

})();
