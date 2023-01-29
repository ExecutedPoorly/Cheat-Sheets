function myFunction(name) {
  const myName = {name} //creates object {name}
  function changeName(){
    myName.name = "bob" //adds name attribute to the new myName object.
    
  }
  return{changeName, myName}
}
const person = myFunction("steve")
console.log(person.myName.name)// steve
person.changeName() //executed changename() function, changing name to bob.
console.log(person.myName.name) // bob
