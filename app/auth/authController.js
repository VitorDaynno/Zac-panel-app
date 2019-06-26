(function() {

    angular.module('zacPanel').controller('AuthCtrl', [
        '$location',
        'msgs',
        'auth',
        AuthController
    ])

    function AuthController($location, msgs, auth) {
        const vm = this;

        vm.login = () => {
            auth.login(vm.user, (err) => {
                if(err) {
                    if(err.message == 'Token are incorrect') {
                        msgs.addError('O token digitado está incorreto ou expirado')
                    } else {
                        msgs.addError(err.message)
                    }
                } else {
                    $location.path('/tasks')
                }
            })
        }

        vm.getUser = () => auth.getUser();

    }
})()