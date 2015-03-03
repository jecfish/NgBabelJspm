'use strict';

class UserCtrl {
	constructor(userSvc) {
		this.userSvc = userSvc;
		this.init();
    }

    init(){
    	this.userSvc.getUsers().then(users => {
            	this.users = users;
            	console.log(users);
            });
    }
}

UserCtrl.$inject = ['userSvc'];

export { UserCtrl }