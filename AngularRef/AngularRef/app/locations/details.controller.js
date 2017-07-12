(function () {
    'use strict';

    angular
        .module('app.locations')
        .controller('LocationDetails', LocationDetails);

    function LocationDetails($routeParams, locationService, notificationService) {
        var vm = this;
        vm.facilityId = $routeParams.facilityId;

        notificationService.info("location details loaded");

        activate();

        function activate() {
            var optionalParams = {};

            locationService.getByFacilityId(vm.facilityId, optionalParams)
                .then(function (result) {
                    vm.Facility = result.Facility;
                    notificationService.success("location found");
                },
                function (error) {
                    notificationService.error("location not found");
                });
        }
    }
})();