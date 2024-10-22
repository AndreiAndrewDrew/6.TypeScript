class UserService {
  static db: any;

  static getUser(id: number) {
    return UserService.db.findById(id);
  }

  create() {
    UserService.db;
  }

  static{
    UserService.db='asdfgdf' //se executa cins pornim codul nostru
  }
}

UserService.db; //nu trebuie sa creem instam, apelam proprietate 'db' analog ca de la un obiect
UserService.getUser(1);

const inst = new UserService();
inst.create();
