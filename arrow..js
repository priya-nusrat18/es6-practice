// function doubleIt(number) {
//     return num * 2
// }
// const result = doubleIt(5);


  const doubleIt = num => num* 2;
  const result = doubleIt(5);
  console.log(result);


  const add = ( x, y) => x * y;
  const result2 = add( 10 , 5);
  console.log(result2);

  const give5 = () => 6;
  const  result3 = give5();
  console.log(result3);

  const doMath = ( x, y) =>{
      const sum = x + y;
      const diff = x - y;
      const result = sum * diff;
      return result
  }
const result4 =doMath ( 7, 5);
console.log(result4);