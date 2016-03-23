(function() {
    'use strict';

    angular
        .module('sampleHazelcastApp')
        .controller('BankAccountDetailController', BankAccountDetailController);

    BankAccountDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'BankAccount', 'User', 'Operation'];

    function BankAccountDetailController($scope, $rootScope, $stateParams, entity, BankAccount, User, Operation) {
        var vm = this;
        vm.bankAccount = entity;
        vm.load = function (id) {
            BankAccount.get({id: id}, function(result) {
                vm.bankAccount = result;
            });
        };
        var unsubscribe = $rootScope.$on('sampleHazelcastApp:bankAccountUpdate', function(event, result) {
            vm.bankAccount = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
