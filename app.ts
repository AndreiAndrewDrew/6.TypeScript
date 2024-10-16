class Vehicle {
  make: string;
  private demages: string[]=[];
  private _model: string;
  protected run: number;//face ca sa se mosteneasca numai urmashilor, 
  //si nu este accesibil din exterior 
  #price: number; //'#' analag la private

  set model(m:string){
    this._model = m;
    this.#price = 100;
  }

  get model(){
    return this._model;
  }

  isPriceEqual(v: Vehicle){
    return this.#price === v.#price; //Controlam daca 2 proprietatsi sunt egale
  }

  addDamages(damage: string){
    this.demages.push(damage)
  }
}

class EuroTruck extends Vehicle{
  setRun(km: number){
    // this.#price = 100; //aici nu putem accesa da eroare
    this.run = km /0.62; //avem acces la protected ca si la public
    //this.damages //errore -nu avem acces la demages
  }
}

new Vehicle();
new EuroTruck();


const car1 = new Vehicle()
car1.make='Toyota Center';
car1.model='Corolla';
car1.addDamages('New Vehicel - 0% Demage');

console.log(car1)


