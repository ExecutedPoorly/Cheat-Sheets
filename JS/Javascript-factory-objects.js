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

/////////////////////////////////////////////GETTER FUNCTION EXAMPLE////////////////////////////////////////
function Person(name, surname) {
  const changeName = (newName) => name = newName

  return {
    get name() {return name}, 
    surname,
    changeName
  }
}

let greg = new Person('Greg', 'Beasly')
greg.changeName = 'Barent'
console.log(greg.name) // 'Barent'! Now we can see the change!
