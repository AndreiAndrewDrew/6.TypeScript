class User{
  _login: string;
  password: string;
  createdAt: Date;

  set login(l:string | number){
    this._login = 'user-' +l;
    this.createdAt = new Date()
  }

  get login(){
    return this._login;
  }

  async getPassword(p: string){

  }
}

//'user-'
const user = new User();
user.login = 'myLogin';
console.log(user);
console.log(user.login)