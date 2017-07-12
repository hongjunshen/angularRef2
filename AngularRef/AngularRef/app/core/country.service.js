(function () {
    angular
        .module('app.core')
        .factory('countryService', countryService);

    function countryService($http, mdConfig) {
        // config
        var baseAddress = mdConfig.apiUrl;
        var config = mdConfig.requestHeader;

        // public api
        var service = {
            getByCodeKeywords: getByCodeKeywords,
            getListRegions: getListRegions,
            getAllCountry: getAllCountry,
            getText: getText
        };

        return service;

        function getText() {
            return "mood23";
        }

        function getAllCountry() {
           return $http.get("http://api.nov.com/mdapi/v1/country/all", config)
                .then(function (response) {
                    return response.data;

                });
        }
        function getByCodeKeywords(keywords, optionalParams) {
            
            if (!optionalParams) {
                optionalParams = {};
            }
           

            return $http.get(baseAddress + "country/" + keywords, config)
                .then(function (response) {
                    console.log(response)
                    return response.data;
                });
        }

        function getListRegions( ) {
           
            return $http.get(baseAddress + "country/regions" , config)
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