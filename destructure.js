const person = {name : 'priya' , age:20, color: 'red', address:'bogura', phone: '01764543219'};
const {name , phone, address} = person;
console.log(name , phone, address);
console.log(name , address);


const complexObject = {
    name : 'abc',
    info: {
        address:'bogura',
        favColor:'black'
    }
}
const {favColor}= complexObject.info;

console.log(favColor);



const friends = ['pria', 'priya', 'tia', 'sia', 'fiya'];
const [bestFriend, ...remainingFriend]=friends;
console.log( remainingFriend);