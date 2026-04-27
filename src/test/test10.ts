interface IForm {
  name: string;
  password: string;
  //   age: number;
}

const form: IForm = {
  name: 'Vasile',
  password: '123',
  //   age: 34,
};

//rezultatul Validatiei - nu e princpial cu e formata functia de validatie
const formValidation: Validation<IForm> = {
  name: { isValid: true },
  password: {
    isValid: false,
    erroMessage: 'Trebuie sa fie mai lung de 5 caractere',
  },
};

// folism mapped types
type Validation<T> = {
  [K in keyof T]:
    | {
        isValid: true;
      }
    | {
        isValid: false;
        erroMessage: string;
      };
};
