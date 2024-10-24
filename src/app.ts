class Vehicle {
  run: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
  vehicle.run = vehicle.run /0.62;
  return vehicle;
}

class LCV extends Vehicle{
  capacity: number;
}

const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV())
kmToMiles({run:1})

//Ex.2
function logId <T extends string | number>(id: T): T{
  console.log(id);
  return id
  
}
