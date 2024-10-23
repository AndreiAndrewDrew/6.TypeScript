abstract class Controller {
  abstract handle(req: any): void;

  handleWhitLogs(req: any) {
    console.log("Start");
    this.handle(req);
    console.log("End");
  }
}

class UserController extends Controller {
  handle(req: any): void {
    console.log(req);
  }
}

//new Controller()-errore
const uc = new UserController();
uc.handleWhitLogs('Request')