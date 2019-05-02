(function() {
    angular.module('zacPanel').component('field', {
        bindings: {
            id: '@',
            label: '@',
            placeholder: '@',
            type: '@',
            model: '=',
        },
        template: `
            <div class="col-xs-12 col-sm-4">
                <div class="form-group">
                    <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
                    <input id="{{ $ctrl.id }}" class="form-control" placeholder="{{ $ctrl.placeholder }}" 
                        type="{{ $ctrl.type }}" ng-model="$ctrl.model"/>    
                </div>
            </div>`
    })
})()