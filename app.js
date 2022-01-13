
// #1 
const myNumber = 5;
function oddEven () {
    if (myNumber % 2 == 0 ) {
    console.log (true);
    } else {
        console.log (false);
    }

}
oddEven();


// #3


function noCaps(st) {
    return st.toLowerCase();
}

let firstName = 'MY NAME IS JOHN';
console.log(noCaps(firstName));

// #4

const myArray = [15, 20, 18, 59, 45, 38, 60];
const evenNumbers = myArray.filter (number => number % 2 === 0);
console.log (evenNumbers);



// #5

const users = [
    { name: 'Mariam'},
    { name: 'Gela'},
    { name: 'Pavle'}

]
const match = users.find((user) => {
  return user.name === 'Mariam';
});
console.log (match);