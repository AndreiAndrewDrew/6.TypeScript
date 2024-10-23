class User {
  // name: string;

  // constructor(name:string){
  //    this.name = name;
  // }

  //analogul mai scurt la cele 3 rinduri de mai sus
  role?: 'admin'|'user'

  constructor(public name:string){}

  login(): void{}
}

function createUser(user: User){
  //logica
  const defaultUser = new User('default');
  defaultUser.role = undefined

  switch (user.role){
    case 'admin':
      // return;
      const a = 8;
    case 'user':
      return true;
      const c=1;
  }
}

interface IChecks {
  [check: string ]: boolean;
}

const d: IChecks ={};
const e = d['drive'];

d.drive

class VipUser extends User{
  override login(): void {
    
  }
}