(function() {
    angular.module('zacPanel').controller('TasksCtrl', [
        '$http',
        TasksController
    ])

    function TasksController($http) {
        const vm = this;
        vm.getTasks = () => {            
            const url = 'http://localhost:3003/api' + '/tasks';
            $http.get(url).then((response)=>{            
                vm.data = response.data;
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
