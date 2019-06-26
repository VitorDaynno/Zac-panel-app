angular.module('zacPanel').constant('consts', {
    appName: 'Zac - Painel',
    version: '1.0',
    owner: 'Vítor Daynno',
    year: '2019',
    apiUrl: 'http://localhost:3003/api',
    userKey: 'user_zac_panel'
}).run(['$rootScope', 'consts', function($rootScope, consts){
    $rootScope.consts = consts
}])