type Modifier = 'read' | 'update' | 'create';

type UserRols = {
  customers?: Modifier;
  projects?: Modifier;
  adminPanel?: Modifier;
};

type ModifierToAcces<Type> = {
  +readonly [Property in keyof Type]-?: boolean;
};

type UserAcces2 = ModifierToAcces<UserRols>;
//UserAcces2 creat automat!!!

type UserAcces1 = {
  customers?: boolean;
  projects?: boolean;
  adminPanel?: boolean;
};
//UserAcces1 create manual si daca sunt schimbari in type Userrole aici nu se fac
