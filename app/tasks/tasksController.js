(function() {
    angular.module('zacPanel').controller('TasksCtrl', [
        '$http',
        'msgs',
        'tabs',
        TasksController
    ])

    function TasksController($http, msgs, tabs) {
        const vm = this;
        const url = 'http://localhost:3003/api/tasks';

        vm.getTasks = () => {            
            $http.get(url).then((response)=>{            
                vm.tasks = response.data;
                vm.task = {};
                tabs.show(vm, {tabList: true, tabCreate: true})
            })
        }

        vm.create = function() {
            $http.post(url, vm.task).then((response)=>{
                vm.task = {}           
                vm.refresh()
                msgs.addSucess('Tarefa criada com sucesso')
            }).catch(function(){
                msgs.addError(data.errors)
            })
        }

        vm.showTabUpdate = function(task) {
            vm.task = task
            tabs.show(vm, {tabUpdate: true})
        }

        vm.showTabDelete = function(task) {
            vm.task = task
            tabs.show(vm, {tabDelete: true})
        }

        vm.delete = function() {
            const deleteUrl = `${url}/${vm.task._id}`
            $http.delete(deleteUrl).then((response)=>{            
                vm.refresh()
                msgs.addSucess('Operação realizada com sucesso')
            }).catch(function(){
                msgs.addError(data.errors)
            })
        }

        vm.getTasks();
    }
})()
