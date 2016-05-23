(function() {
    'use strict';

    angular
        .module('jhipsterHazelcastSampleApplicationApp')
        .config(localStorageConfig);

    localStorageConfig.$inject = ['$localStorageProvider'];

    function localStorageConfig($localStorageProvider) {
        $localStorageProvider.setKeyPrefix('jhi-');
    }
})();
