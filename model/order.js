class Order {
    constructor (product, quantity, unitPrice){
        this.product = product;
        this.quantity = parseInt(quantity);
        this.unitPrice = parseInt(unitPrice);
    }

    totalPrice(){
        return this.quantity * this.unitPrice;
    }
}