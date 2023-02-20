//Тип Number

let myNumber: number = 123456;

let num1 = new Number(123);

//toFixed

console.log(myNumber.toFixed())

console.log(myNumber.toFixed(1))

console.log(myNumber.toFixed(2))

//toString()

console.log(myNumber.toString())

// String

let myString: string = 'Hello men'

let myString2: string = '(Den)'

// //charAt

console.log(myString.charAt(1))

// //concat

console.log(myString.concat(myString2))

// //indexOf

console.log(myString.indexOf('m'))

// //replace

console.log(myString.replace('Hello', 'Goodby'))

// //split

console.log(myString.split(' '))

// //Boolean

let myBoolean: boolean = true

console.log(myBoolean)

// //Array

let fruits: string[] = ['Apple', 'Orange']

let manyFruits: Array<any> = ['Apple2', 'Orange2']

let numberArray: Array<number> = [1,3,2,5,4]

// //Доступ к элементу

console.log(fruits[10])

// //Sort

console.log(numberArray.sort())

// //Push

console.log(fruits.push('Banana'))
console.log(fruits)

// //Pop

console.log(fruits.pop())

// //Цикл for

for (let i = 0; i < 3; i++){

      console.log(I am here: ${i})

       

  }

// //for of

for (let i of numberArray){
     console.log(i)

 }

// //for in

for (let i in numberArray){
      console.log(i)

 }

// //Цикл while

let i: number = 2
while (i < 4){

    console.log(Programmer: ${i});
     i++;

}

// // //do .. while

do {
    console.log(Oh men);
    i++;
  } while(i < 4);
