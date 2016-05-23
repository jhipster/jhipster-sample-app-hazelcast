(function () {
    'use strict';

    angular
        .module('jhipsterHazelcastSampleApplicationApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
