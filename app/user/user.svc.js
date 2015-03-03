'use strict';

class UserSvc {
	constructor($http){
		this.$http = $http;
	}

	getUsers(){
		return this.$http.get('https://api.github.com/users').then(r => r.data);
	}

	static factory($http){
    	return new UserSvc($http);
    }
};

UserSvc.factory.$inject = ['$http'];

export { UserSvc }
