"use strict";
class Controller {
    handleWhitLogs(req) {
        console.log("Start");
        this.handle(req);
        console.log("End");
    }
}
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
//new Controller()-errore
const uc = new UserController();
uc.handleWhitLogs('Request');
