'use strict';

angular.module('sampleHazelcastApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


