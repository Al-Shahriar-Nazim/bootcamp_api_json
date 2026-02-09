//json -> javascript object notation
//JSON হলো data format যেটা দিয়ে data store ও transfer করা হয় (especially API তে)।

const person ={
    name:"nazim",
    age:22,
    isStudent: true,
    skills:["html","css","js"]
}
console.log(person)
console.log(typeof person)

//object কে json এ convert করার জন্য JSON.stringify() method use করা হয়।
const jsonPerson =JSON.stringify(person);
console.log(jsonPerson)
console.log(typeof jsonPerson)

//json কে object এ convert করার জন্য JSON.parse() method use করা হয়।
const objPerson = JSON.parse(jsonPerson);
console.log(objPerson);
console.log(typeof objPerson);
