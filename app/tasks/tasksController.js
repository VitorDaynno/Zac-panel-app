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

        vm.parseDate = (dateStr) =>{
            const date = new Date(dateStr);
            const day = date.getDate() + 1;
            let month = date.getMonth() + 1;
            month = month < 9 ? '0' + month : month;
            const year = date.getFullYear();
            return day + '/' + month + '/' + year;
        }

        vm.parseHour = (dateStr) => {
            const date = new Date(dateStr);
            let hour = date.getHours();
            hour = hour > 9 ? hour : '0' + hour;
            let minutes = date.getMinutes();
            minutes = minutes > 9 ? minutes : '0' + minutes;
            return hour + ':' + minutes
        }

        vm.getTasks();
    }
})()
