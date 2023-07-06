class Person {

    constructor(name, surname, dob, gender) {
        this.name = name;
        this.surname = surname;
        this.dob = dob; //Date
        this.gender = gender;
    }

    //epoc time 1970 1gennaio ore 00:00
    get age() {
        const nowTimeStamp = new Date().getTime();
        const dobTimeStamp = this.dob.getTime();

        //delta per definire la differenza 
        const deltaTimeStamp = nowTimeStamp -  dobTimeStamp;
        const age =Math.floor( deltaTimeStamp / (1000 * 60 * 60 * 24 * 365)); //arrotondamento per il più basso   
        return age;
    }

    toString() {
        return this.name + '\n' + this.surname + '\n' + this.dob + '\n' + this.gender;
    }
}