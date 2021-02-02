function add(num1, num2 = 40) {
    //num2 = num2 || 40;
    return num1 + num2;
}
const total = add(80);
console.log(total);