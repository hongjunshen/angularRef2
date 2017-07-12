(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('mdConfig', {
            apiUrl: 'http://api.nov.com/mdapi/v1/',
            requestHeader: { headers: { 'mdapi-appkey': 'P9IT8C3N28P1PXE' } }
        })
        .constant('toastr', toastr);
})();