(function () {
    'use strict';

    angular
        .module('app.country')
        .controller('CountrySearch', CountrySearch);

    function CountrySearch(notificationService, $http, mdConfig, countryService) {
        var vm = this;
        vm.message = 'hello01';

        notificationService.info("country search loaded");
       
        vm.search = search;

        vm.searchByName = searchByName;

        function search() {
            countryService.getAllCountry()
                 .then(function (results) {
                     console.log(results);
                     vm.Countries = results.Countries;
                     notificationService.success(results.Metadata.returned + " Country returned, " + results.Metadata.total + " found");
                 },
            function (error) {
                vm.Countries = null;
                notificationService.error(error.statusText);
            });
        };

        function searchByName() {
            var optionalParams = {};
            countryService.getByCodeKeywords(vm.searchText, optionalParams)
            .then(function (results) {
                vm.Country = results.Country;
                notificationService.success(results.Metadata.returned + " Country returned, " + results.Metadata.total + " found");
            })
        };
    }
})();