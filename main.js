/*let temp = 35;
while(temp > 20){
    temp--;
    console.log(temp);
}

console.log('Finish', temp);

const SECRET = '5577'
let pin = '1234';

do {
    pin = enter();
    if (pin == '5577') {
    console.log('Open');
    }
}while(pin != SECRET);

let users  = ['Ivan', 'Elena', 'Olha', 'Irina', 'Petr'];

for (let i=0; i<users.length; i++) {
    console.log('step', users[i]);
}
*/

let user = {
    name: 'Ivan',
    lastName: 'Petroffff',
    city: 'Kyiv',
    age: 12,
}

//for(let item of user);
for (let item in user){
    console.log(item, user[item]);
}