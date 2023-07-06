const order1 = new Order('Pallone', 10, 20);
const order2 = new Order('Maglietta', 10, 50);
console.log(order1.totalPrice);
console.log(order2.toString());


const myOrdersArray = [order1, order2];
console.log(myOrdersArray);

const client1 = new Client('Giacomo', 'Giacomini', new Date(1993,4,29),'M','via Quivicino',myOrdersArray);
console.log(client1);

const employee1 = new Employee('Ares','Fiumicelli',new Date (1993,4,25),'M','cancelleria', [client1]);

console.log(employee1.age);
console.log(client1.totalExpenses());

console.log('-----------',employee1.totalEarnings());

client1.addOrder(new Order('calzini',50,10));

console.log('-----------',employee1.totalEarnings());
console.log(employee1.bestClient());