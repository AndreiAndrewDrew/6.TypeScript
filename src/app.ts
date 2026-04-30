interface IUserService {
  users: number;
  getUserInDatabase(): number;
}

class UserService implements IUserService {
  users: number = 1000;

  getUserInDatabase(): number {
    return this.users;
  }
}

function nullUser(obj: IUserService) {
  obj.users = 0;
  return obj;
}

function logUser(obj: IUserService) {
  console.log('Users: ' + obj.users);
  return obj;
}

console.log(new UserService().getUserInDatabase());
console.log(nullUser(new UserService()).getUserInDatabase());
console.log(logUser(nullUser(new UserService())).getUserInDatabase());
console.log(nullUser(logUser(new UserService())).getUserInDatabase());
