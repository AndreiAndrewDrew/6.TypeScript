/*
Необходимо сделать корзину (Cart) на сайте,
которая имееет список продуктов (Product), добавленных в корзину
и переметры доставки (Delivery). Для Cart реализовать методы:
- Добавить продукт в корзину
- Удалить продукт из корзины по ID
- Посчитать стоимость товаров в корзине
- Задать доставку
- Checkout - вернуть что всё ок, если есть продукты и параметры доставки
Product: id, название и цена
Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
 */

class Product {
  constructor(public id: number, public title: string, public price: number) {}
}

class Delivery {
  constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
  constructor(date: Date, public address: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  constructor(public shopId: number) {
    super(new Date());
  }
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
  private products: Product[] = [];
  private delivery: DeliveryOptions;

  public addProduct(product: Product) {
    this.products.push(product);
  }

  public deleteProduct(productId: number): void {
    this.products = this.products.filter((p: Product) => p.id !== productId);
  }

  public getSum(): number {
    return this.products
      .map((p: Product) => p.price)
      .reduce((p1: number, p2: number) => p1 + p2);
  }

  public setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
  }

  public checkOut() {
    if (this.products.length == 0) {
      throw new Error("Nu este nici un product in cosh!!!");
    }
    if (!this.delivery) {
      throw new Error("Nu este indicat metoda de dostavka!!!");
    }
    return { success: true };
  }
}

const cart1 = new Cart();

cart1.addProduct(new Product(1, "Covrigi", 10));
cart1.addProduct(new Product(2, "Tort", 20));
cart1.addProduct(new Product(3, "Ciocolata", 30));
console.log("Afisham produsele din Cosh: ", cart1);

cart1.deleteProduct(1);

console.log("S-a sters produsul cu id = 1");
console.log("Afisham produsele din Cosh: ", cart1);

cart1.setDelivery(new HomeDelivery(new Date(), 'Oaricare adresa'))

console.log("Control al operatiunii ->", cart1.checkOut());
console.log("Suma Totala a produselor din Cosh=", cart1.getSum());

