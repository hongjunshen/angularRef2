﻿(function () {
    angular
        .module('app.core')
        .factory('notificationService', notificationService);

    function notificationService(toastr) {
        // public api
        var service = {
            showToasts: true,

            error: error,
            info: info,
            success: success,
            warning: warning
        }

        return service;

        function error(message, data, title) {
            toastr.error(message, title);
        }

        function info(message, data, title) {
            toastr.info(message, title);
        }

        function success(message, data, title) {
            toastr.success(message, title);
        }

        function warning(message, data, title) {
            toastr.warning(message, title);
        }
    }
})();