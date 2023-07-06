class Order {
    
    constructor (product, quantity, unitPrice){
        this.product = product;
        this.quantity = parseInt(quantity);
        this.unitPrice = parseInt(unitPrice);
    }

    get totalPrice(){
        return this.quantity * this.unitPrice;
    }

    toString(){
        return `Product: ${this.product} 
Quantità: ${this.quantity}  
Prezzo Unitario: ${this.unitPrice.toFixed(2)}€
Prezzo Totale: ${this.unitPrice.toFixed(2)}€`
    }
}