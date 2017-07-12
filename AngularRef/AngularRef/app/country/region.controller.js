(function () {
    'use strict';

    angular
        .module('app.country')
        .controller('CountryRegions', CountryRegions);

    function CountryRegions(countryService, notificationService) {
        var vm = this;

        notificationService.info("country regions loaded");

        vm.region = "asian";
       
        searchRegion();

        function searchRegion() {
            countryService.getListRegions()
            .then(function (results) {
                console.log(results);
                vm.Regions = results;
                notificationService.success(results.Metadata.returned + " region returned, " + results.Metadata.total + " found");
            })
        };
    }
})();