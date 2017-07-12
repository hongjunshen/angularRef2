(function () {
    'use strict';

    angular
        .module('app.core')
        .config(config)
        .config(toastrConfig);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "app/layout/home.html"
            })
            .when("/country/regions/regions", {
                templateUrl: "app/country/regions.html",
                controller: "CountryRegions",
                controllerAs: "vm"
            })
            .when("/country", {
                templateUrl: "app/country/search.html",
                controller: "CountrySearch",
                controllerAs: "vm"
            })
            .when("/country/:id", {
                templateUrl: "app/country/details.html",
                controller: "CountryDetails",
                controllerAs: "vm"
            })
            .when("/people", {
                templateUrl: "app/people/search.html",
                controller: "PeopleSearch",
                controllerAs: "vm"
            })
            .when("/people/:networkLogin", {
                templateUrl: "app/people/details.html",
                controller: "PeopleDetails",
                controllerAs: "vm"
            })
            .when("/locations", {
                templateUrl: "app/locations/search.html",
                controller: "LocationSearch",
                controllerAs: "vm"
            })
            .when("/locations/:facilityId", {
                templateUrl: "app/locations/details.html",
                controller: "LocationDetails",
                controllerAs: "vm"
            });

        $locationProvider.html5Mode(true);
    }

    function toastrConfig(toastr) {
        toastr.options.timeOut = 2500;
        toastr.options.positionClass = 'toast-bottom-right';
    }
})();