 'use strict';

angular.module('sampleHazelcastApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-sampleHazelcastApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-sampleHazelcastApp-params')});
                }
                return response;
            }
        };
    });
