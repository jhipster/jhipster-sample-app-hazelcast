(function () {
    'use strict';

    angular
        .module('sampleHazelcastApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
