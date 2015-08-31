'use strict';

angular.module('samplehazelcastApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
