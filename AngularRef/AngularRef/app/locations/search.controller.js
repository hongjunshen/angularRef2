(function () {
    'use strict';

    angular
        .module('app.locations')
        .controller('LocationSearch', LocationSearch);

    function LocationSearch(locationService, notificationService) {
        var vm = this;
        vm.search = search;

        notificationService.info("location search loaded");

        function search() {
            var optionalParams = {
                fields: "primaryname,facilityid",
                orderby: "primaryname"
            };

            locationService.getByAddressKeywords(vm.searchText, optionalParams)
                .then(function (results) {
                    vm.Facilities = results.Facilities;
                    notificationService.success(results.Metadata.returned + " facilities returned, " + results.Metadata.total + " found");
                },
                function (error) {
                    vm.Facilities = null;
                    notificationService.error(error.statusText);
                });
        };
    }
})();