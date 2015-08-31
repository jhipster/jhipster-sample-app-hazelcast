'use strict';

angular.module('samplehazelcastApp')
    .controller('OperationDetailController', function ($scope, $rootScope, $stateParams, entity, Operation, BankAccount, Label) {
        $scope.operation = entity;
        $scope.load = function (id) {
            Operation.get({id: id}, function(result) {
                $scope.operation = result;
            });
        };
        $rootScope.$on('samplehazelcastApp:operationUpdate', function(event, result) {
            $scope.operation = result;
        });
    });
