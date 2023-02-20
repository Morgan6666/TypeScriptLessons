//ОбЪекты

 //Создадим объект user

let user = {

    first_name: 'Den',

    last_name: "Pro",

    age: 12,

    pet: {

        name: 'Pusha',

        age: 16

    }



}



 //Созадим объект таблицы пользователей

   let userTable = {

    users: user

   }



 //Выведем все ключи объекта user

 console.log(Ключи объекта user:${Object.keys(user)})

//Выведем все значнения



// //Выведем на экран содержимое объекта

console.log(Имя пользователя:${user.first_name})

console.log(Фамилия пользователя:${user.last_name})

console.log(Возраст пользователя:${user.age})

console.log(Pet:${user.pet.age})



// //Выведем на экран содержимое вложенного объекта

    console.log(Имя пользователя:${userTable.users.first_name})

    console.log(Фамилия пользователя:${userTable.users.first_name})

    console.log(Возраст поользователя:${userTable.users.age})
