(function(){
    angular.module('zacPanel').config([
        '$stateProvider',
        '$urlRouterProvider',
        ($stateProvider, $urlRouterProvider) => {
            $stateProvider
                .state('tasks',{
                    url: "/tasks",
                    templateUrl: "tasks/tasks.html"
                })
        }
    ])
    .run([
        '$rootScope',
        '$http',
        '$location',
        '$window',
        'auth',
        function ($rootScope, $http, $location, $window, auth) {
            validateUser()
            $rootScope.$on('$locationChangeStart', () => validateUser())

            function validateUser() {
                const user = auth.getUser()
                const authPage = '/auth.html'
                const isAuthPage = $window.location.href.includes(authPage)
                if (!user && !isAuthPage) {
                    $window.location.href = authPage
                } else if (user && !user.isValid) {
                    user.isValid = true
                    $http.defaults.headers.common.Authorization = `Bearer ${user.token}`
                    isAuthPage ? $window.location.href = '/' : $location.path('/tasks')
                }
            }
        }
    ])
})()
