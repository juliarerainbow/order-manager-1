class Employee extends Person {
    constructor(name, surname, dob, sex, age, department, clientArray = []) {
        super(name, surname, dob, sex, age)
        this.department = department;
        this.clientArray = clientArray; //typeofClients
    }

    toString() {
        return super.toString() + '\n'
            + this.department + '\n' +
            + this.clients + '\n';
    }

    bestClient() {

    }

    totalEarnings() {

    }

    addClient(client) {
        this.clientArray.push(client);
    }
}