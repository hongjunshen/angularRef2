(function () {
    angular
        .module('app.core')
        .factory('locationService', locationService);

    function locationService($http, mdConfig) {
        // config
        var baseAddress = mdConfig.apiUrl;
        var config = mdConfig.requestHeader;

        // public api
        var service = {
            getByAddressKeywords: getByAddressKeywords,
            getByFacilityId: getByFacilityId
        };

        return service;

        function getByAddressKeywords(keywords, optionalParams) {
            if (!optionalParams) {
                optionalParams = {};
            }
            optionalParams.address = keywords;

            return $http.get(baseAddress + "facility/" + createQueryString(optionalParams), config)
                .then(function (response) {
                    return response.data;
                });
        }

        function getByFacilityId(facilityId, optionalParams) {
            if (!optionalParams) {
                optionalParams = {};
            }

            return $http.get(baseAddress + "facility/" + facilityId + createQueryString(optionalParams), config)
                .then(function (response) {
                    return response.data;
                });
        }

        function createQueryString(json) {
            var queryString = "?";
            for (var key in json) {
                queryString += key + "=" + json[key] + "&";
            }
            return queryString.substring(0, queryString.length - 1);
        }
    }
})();