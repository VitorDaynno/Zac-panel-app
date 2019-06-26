(function () {
    angular.module('zacPanel').factory('auth', [
        '$http',
        '$location',
        'consts',
        AuthFactory
    ])

    function AuthFactory($http, $location, consts){

        let user = null;

        function getUser() {
            if(!user) {
                user = JSON.parse(localStorage.getItem(consts.userKey))
            }
            return user;
        }

        function login(authToken, callback) {
            submit('auth', authToken, callback)
        }

        function submit(url, authToken, callback) {
            $http.post(`${consts.apiUrl}/${url}`, authToken)
                .then(resp => {
                    if(resp.status != 200) {
                        throw resp;
                    }
                    localStorage.setItem(consts.userKey, JSON.stringify(resp.data))
                    $http.defaults.headers.common.Authorization = `Bearer ${resp.data.token}`
                    if (callback) callback(null, resp.data) 
                })
                .catch((resp) =>{
                    if (callback) callback(resp.data.error, null)
                })
        }

        function logout(callback) {
            user = null;
            localStorage.removeItem(consts.userKey);
            $http.defaults.headers.common.Authorization = ''
            $location.path('/')
            if(callback) callback(null)
        }

        return { login, getUser, logout }
    }
})()