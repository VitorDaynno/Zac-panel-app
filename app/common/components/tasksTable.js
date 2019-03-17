(function() {
    angular.module('zacPanel').component('tasksTable', {
        bindings: {
            name: '@',
        },
        template: `
        <table class="danger table table-striped table-hover">
            <thead>
                <tr>
                    <th>
                        Tarefa
                    </th>
                    <th>
                        Dia
                    </th>
                    <th>
                        Hora
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {{ $ctrl.name }}
                    </td>
                    <td>
                        10/02/2019
                    </td>
                    <td>
                        21:55s
                    </td>
                </tr>                <tr>
                    <td>
                        teste
                    </td>
                    <td>
                        10/02/2019
                    </td>
                    <td>
                        21:55
                    </td>
                </tr>
            </tbody>
        </table>
        `
    })
})()