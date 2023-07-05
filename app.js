const order1 = new Order('Pallone', 10, 20);
const order2 = new Order('Maglietta', 10, 50);
console.log(order1.totalPrice());
console.log(order2.totalPrice());


const myOrdersArray = [order1, order2];
console.log(myOrdersArray);

const client1 = new Client('Giacomo', 'Giacomini', '05/07/2003', 'M', 'via Quivicino', myOrdersArray);
console.log(client1.toString());
console.log(client1.orderArray);
// const client2 = new Client();