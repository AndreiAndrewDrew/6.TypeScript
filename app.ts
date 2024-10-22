class Payment{
  private date: Date = new Date()

  getDate(this: Payment){
    return this.date
  }

  getDateArrow = () =>{
    return this.date;
  }
}

const p1 = new Payment()

const user ={
  id: 1,
  paymentDate: p1.getDate.bind(p1),
  paymentDateArrow: p1.getDateArrow 
}

// console.log(p1.getDate())
// console.log(user.paymentDate())
// console.log(user.paymentDateArrow())

class PaymentPersistent extends Payment{
  save() {
      // return super.getDate() //cu super apelam la clasa parinte, adica din 'Payment';
      //la functia simpla 'getDate()'
      return this.getDateArrow() //ca sa apelam la functie strelocinaiae, apelam cu 'this'
  }
}

console.log(new PaymentPersistent().save())