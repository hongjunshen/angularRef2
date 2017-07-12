(function () {
    'use strict';

    angular
        .module('app.people')
        .controller('PeopleDetails', PeopleDetails);

    function PeopleDetails($routeParams, peopleService, notificationService) {
        var vm = this;
        vm.networkLogin = $routeParams.networkLogin;

        notificationService.info("people details loaded");

        activate();

        function activate() {
            var optionalParams = {};

            peopleService.getByNetworkLogin(vm.networkLogin, optionalParams)
                .then(function (result) {
                    vm.Employee = result.Employee;
                    notificationService.success("employee found");
                },
                function (error) {
                    notificationService.error("employee not found");
                });
        }
    }
})();