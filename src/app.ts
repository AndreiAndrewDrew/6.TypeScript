interface Role {
  name: string;
}

interface Permission {
  endDate: Date;
}

interface User {
  name: string;
  roles: Role[];
  permission: Permission;
}

const user: User = {
  name: 'Vasile',
  roles: [],
  permission: {
    endDate: new Date(),
  },
};

const nameUser = user['name'];
const roleNames = 'roles';
//aici lucram cu obiectele

type rolesType = User['roles'];
type rolesType2 = User[typeof roleNames];
//aici se afla tipurile, lucram cu tipurile

type roleType = User['roles'][number];
type dateType = User['permission']['endDate'];

const roles = ['admin', 'user', 'super-user'] as const;
type roleType2 = (typeof roles)[number];
