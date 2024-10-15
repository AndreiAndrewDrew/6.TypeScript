type PaymentStatus2 = "new" | "paid";

class Payment {
  id: number;
  status: PaymentStatus2 = "new";

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = "paid";
  }
}

class PersistedPayment extends Payment {
  //largim clasa existenta
  dataBaseId: number;
  payedAt: Date;

  constructor() {
    const id = Math.random();
    super(id); //apelam la constructurul clasei Payment
  }

  save() {
    //Salvam in baza
  }

  override pay(date?: Date) {
    super.pay();
    if (date) {
      this.payedAt = date;
    }
  }
}

// new Payment()
// new PersistedPayment()

class User {
  name: string = "user";

  constructor() {
    console.log(this.name);
  }
}

class Admin extends User {
  name: string = "admin";

  constructor() {
    super();
    console.log(this.name);
  }
}

new Admin();

new Error("Eroare");

class httpError extends Error {
  code: number;
  constructor(message: string, code?: number) {
    super(message);
    this.code = code ?? 500;
  }
}
