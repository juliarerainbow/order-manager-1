class Client extends Person {
    constructor(name, surname, dob, sex, age, address, orderArray = []) {
        super(name, surname, dob, sex, age)
        this.address = address;
        this.orderArray = orderArray; //typeofOrders
    }

    toString() {
        return super.toString() + '\n'
            + this.address + '\n' +
            + this.orders + '\n';
    }

    totalExpenses() {
        let allOrderExpenses = 0;

        for (let i = 0; i < this.orderArray.length; i++) {
            const element = this.orderArray[i];

        }
        return allOrderExpenses;

    }



    addOrder(order) {
        this.orderArray.push(order);
    }
}