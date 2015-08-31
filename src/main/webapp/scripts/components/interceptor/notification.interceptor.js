 'use strict';

angular.module('samplehazelcastApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-samplehazelcastApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-samplehazelcastApp-params')});
                }
                return response;
            },
        };
    });