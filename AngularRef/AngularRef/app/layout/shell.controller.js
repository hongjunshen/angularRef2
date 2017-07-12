(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    function Shell($route, notificationService) {
        notificationService.info("loading shell");
        $route.reload();
    }
})();