class Client extends Person {

    constructor(name, surname, dob, gender, address, orderArray = []) {
        super(name, surname, dob, gender)
        this.address = address;
        this.orderArray = orderArray; //typeofOrders
    }

    toString() {
        return super.toString() + '\n'
            + this.address + '\n' +
            + this.orders + '\n';
    }

    addOrder(order) {
        this.orderArray.push(order);
    }

    totalExpenses() {
        let acc = 0;

        for (let i = 0; i < this.orderArray.length; i++) {
            const element = this.orderArray[i];
            acc += element.totalPrice;
        }
        return acc;

        // return this.orderArray.reduce((a,c)=> a + c.totalPrice(),0)

    }
}