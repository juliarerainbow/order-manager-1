class Person {
    constructor(name, surname, dob, sex, age) {
        this.name = name;
        this.surname = surname;
        this.dob = dob; //Date
        this.sex = sex;
        this.age = age; //get
    }

    toString() {
        return this.name + '\n' + this.surname + '\n' + this.dob + '\n' + this.sex + '\n' + this.age + '\n';
    }
}