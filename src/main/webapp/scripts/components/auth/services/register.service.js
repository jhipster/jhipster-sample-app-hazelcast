'use strict';

angular.module('samplehazelcastApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


