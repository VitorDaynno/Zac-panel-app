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
            $urlRouterProvider.otherwise('/tasks')
        }
    ])
})()
