(function () {
    'use strict';

    angular
        .module('app.people')
        .controller('PeopleSearch', PeopleSearch);

    function PeopleSearch(peopleService, notificationService) {
        var vm = this;
        vm.search = search;

        notificationService.info("people search loaded");

        function search() {
            var optionalParams = {
                fields: "firstname,lastname,networklogin,preferredfirstname,preferredlastname"
            };

            peopleService.getByIdentityKeywords(vm.searchText, optionalParams)
                .then(function (results) {
                    console.log(results);
                    vm.Employees = results.Employees;
                    notificationService.success(results.Metadata.returned + " employees returned, " + results.Metadata.total + " found");
                },
                function (error) {
                    vm.Employees = null;
                    notificationService.error(error.statusText);
                });
        };
        
    }
})();