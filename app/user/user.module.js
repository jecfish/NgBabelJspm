'use strict';

import { UserCtrl } from './user.ctrl'
import { UserSvc } from './user.svc'

let ctrl = UserCtrl;
let svc = UserSvc.factory; 

export { svc }; 
export { ctrl };



