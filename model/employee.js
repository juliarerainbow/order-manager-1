class Employee extends Person {

    constructor(name, surname, dob, gender, department, clientArray = []) {
        super(name, surname, dob, gender)
        this.department = department;
        this.clientArray = clientArray; 
    }

    toString() {
        return super.toString() + '\n'
            + this.department + '\n' +
            + this.clients + '\n';
    }

    bestClient() {

        // return this.clientArray.reduce((a,c)=> a ? ( a.totalExpenses() >  c.totalExpenses()? a : c) : c ,null);

        // return this.clientArray.reduce((a,c)=> {
        //     if(a === null){
        //         return c;
        //     }
        //     if (a.totalExpenses()>c.totalExpenses()){
        //         return a;
        //     }else{
        //         return c;
        //     }
        // } ,null);


        if(this.clientArray.length === 0 ) {
            return null;
        }

        const bestClient = this.clientArray[0];

        for (let i = 0; i < this.clientArray.length; i++) {
            const client = this.clientArray[i];
            if (client.totalExpenses() > bestClient.totalExpenses()){
                bestClient=client;
            }
        }
        return bestClient;
    }

    totalEarnings() {

        return this.clientArray.reduce((a,c) => a+ c.totalExpenses(),0);

    }

    addClient(client) {
        this.clientArray.push(client);
    }
}