class ShoppingCart {
  constructor() {
    this.total = 0;
    this.items = {};
  }

  addItem(item_name, quantity, price) {
    Object.defineProperty(this.items, item_name, { value: quantity });
    //const targetMember = "item_name";
    //this.items[targetMember.value] = quantity;
    this.total += price * quantity;

    console.log("Total is " + this.total);
  }

  removeItem(item_name, quantity, price) {
    //let initialQuantity = this.items[item_name];
    const initialQuantity = this.items[item_name];
    console.log("Initial quantity is " + initialQuantity);
    console.log("Initial Total is " + this.total);
    console.log("Price is " + price);
    //this.total -= price * quantity;

    this.items[item_name.value] = initialQuantity - quantity;
    this.total -= price * quantity;
    console.log("New quantity is " + (initialQuantity - quantity));
    console.log("New Total is " + this.total);
    //this.items[item_name.value] = initialQuantity - quantity;
    console.log(
      "New Quantity after reassign is " + this.items[item_name.value]
    );
    //delete this.items.item_name;
  }

  checkout(cash_paid) {
    if (cash_paid < this.total) {
      return "Cash paid not enough";
    } else {
      var balance = cash_paid - this.total;
      return balance;
    }
  }
}

var v = new ShoppingCart();
v.addItem("Mango", 3, 10);
v.removeItem("Mango", 2, 10);
