(function() {
    angular.module('zacPanel').controller('TasksCtrl', [
        '$http',
        TasksController
    ])

    function TasksController($http) {
        const vm = this;
        vm.getTasks = () => {            
            const url = 'http://localhost:3003/api' + '/tasks';
            console.log(url)
            $http.get(url).then((response)=>{                
                vm.data = response.data[0].name;
                vm.nome = 'teste'
            })
        }

        vm.getTasks();
    }
})()
