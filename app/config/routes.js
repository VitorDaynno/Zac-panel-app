(function(){
    angular.module('zacPanel').config([
        '$stateProvider',
        '$urlRouterProvider',
        ($stateProvider, $urlRouterProvider) => {
            $stateProvider
                .state('newtasks',{
                    url: "/newtasks",
                    templateUrl: "tasks/newTasks.html"
                })
                .state('tasks',{
                    url: "/tasks",
                    templateUrl: "tasks/tasks.html"
                })
            $urlRouterProvider.otherwise('/tasks')
        }
    ])
})()
