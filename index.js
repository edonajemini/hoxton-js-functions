/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

 // Input: a (number), b (number)
 // Action: Add both numbers together
 // Output: The result (number)
 function add(a, b) {
    // write your code here
    return a + b
  }
 
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isitEven(a) {
    // write your code here
    if (a % 2 == 0) return true;
    else return false;
  }
 
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(name) {
    // write your code here
    return `Hello there ${name}`
  }
 
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function Adult(age) {
    // write your code here
    if (age >= 18) return true
    else return false 
  }
 
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function over18(age) {
    // write your code here
   let yearsLeft = 18 - age;
   if(yearsLeft === 1)
   return `${yearsLeft} year`
   else return `${yearsLeft} years`
  }
 
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit(person) {
    // write your code here
    // use greet, isAnAdult and yearsToAdulthood to help you!
    if (Adult(person.age)) console.log(`Hello ${person.name}`) 
    else console.log(`Come back in ${over18(person.age)}`)
  }
  admit({name: "Edona", age:22 }); 