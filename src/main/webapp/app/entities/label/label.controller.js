(function() {
    'use strict';

    angular
        .module('jhipsterHazelcastSampleApplicationApp')
        .controller('LabelController', LabelController);

    LabelController.$inject = ['Label'];

    function LabelController(Label) {
        var vm = this;

        vm.labels = [];

        loadAll();

        function loadAll() {
            Label.query(function(result) {
                vm.labels = result;
                vm.searchQuery = null;
            });
        }
    }
})();
