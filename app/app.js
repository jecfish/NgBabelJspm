import angular from 'angular';
import * as UserModule from './user/user.module';

console.log(angular.version);

angular.module('myApp',[])
.factory('userSvc', UserModule.svc)
.controller('userCtrl', UserModule.ctrl);
