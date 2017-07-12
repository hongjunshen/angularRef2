(function () {
    angular
        .module('app.core')
        .factory('peopleService', peopleService);

    function peopleService($http, mdConfig) {
        // config
        var baseAddress = mdConfig.apiUrl;
        var config = mdConfig.requestHeader;

        // public api
        var service = {
            getByIdentityKeywords: getByIdentityKeywords,
            getByNetworkLogin: getByNetworkLogin
        };

        return service;

        function getByIdentityKeywords(keywords, optionalParams) {
            if (!optionalParams) {
                optionalParams = {};
            }
            optionalParams.identity = keywords;

            return $http.get(baseAddress + "employee/" + createQueryString(optionalParams), config)
                .then(function (response) {
                    return response.data;
                });
        }

        function getByNetworkLogin(networkLogin, optionalParams) {
            if (!optionalParams) {
                optionalParams = {};
            }

            return $http.get(baseAddress + "employee/" + networkLogin + createQueryString(optionalParams), config)
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