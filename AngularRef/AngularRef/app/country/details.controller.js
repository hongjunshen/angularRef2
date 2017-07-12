(function () {
    'use strict';

    angular
        .module('app.country')
        .controller('CountryDetails', CountryDetails);

    function CountryDetails($routeParams, countryService, notificationService) {
        var vm = this;
        vm.Id = $routeParams.id;

        notificationService.info("country details loaded");

        searchByName();

        function searchByName() {
            var optionalParams = {};
            countryService.getByCodeKeywords(vm.Id, optionalParams)
            .then(function (results) {
                console.log(results);
                vm.Country = results.Country;
                notificationService.success(results.Metadata.returned + " Country returned, " + results.Metadata.total + " found");
            })
        };
    }
})();