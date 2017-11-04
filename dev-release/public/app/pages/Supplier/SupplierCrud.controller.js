

angular.module('OPD.supplierCrud').controller('SupplierCrudController', ['$location','$scope', '$routeParams', 'supplierService',
    function ($location,$scope, $routeParams, supplierService) {
        $scope.myDate = new Date();
        function getSuppliers() {

            supplierService.get().then(supplier => {
                $scope.supplier = supplier;
            });
        }
        getSuppliers()
        $scope.required = true;
        $scope.date = new Date();
        $scope.addSupplier = (supplier) => {
            $scope.required = true;
            var d = new Date();
            var n = d.getTime();
            supplier.sid=n;
            supplierService.addSupplier(supplier).then(() => {
               // $location.url("/home/nurse/addtoQueue").replace();
                getSuppliers();
                alert("Success!");
                $scope.supplier="";

            });
        };
    }]);