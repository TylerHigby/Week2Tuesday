const locations = [
  '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
  name: 'Jimbo',
  picture: '🤵',
  location: '🏤'
},
{
  name: 'Sammy',
  picture: '🙆‍♀️',
  location: '🏤'
},
{
  name: 'Michael',
  picture: '👷',
  location: '🏤'
},
{
  name: 'Robert',
  picture: '👷',
  location: '🏥'
},
{
  name: 'Terry',
  picture: '🤴',
  location: '🏥',
},
{
  name: 'Bill',
  picture: '🕵️',
  location: '🏥',
},
{
  name: 'Marie',
  picture: '👩‍🍳',
  location: '🏭',
},
{
  name: 'Mykeal',
  picture: '💂',
  location: '🏭',
},
{
  name: 'Phil',
  picture: '🧜‍♂️',
  location: '🏭',
},
{
  name: 'Wilson',
  picture: '🏐',
  location: '🏢',
},
{
  name: 'Wendy',
  picture: '👩‍⚕️',
  location: '🏢',
},
{
  name: 'Jeremy',
  picture: '🦹',
  location: '🏢',
}
]


// //ANCHOR - Question 2
function drawPeople() {
  for (let i = 0; i < locations.length; i++) {
    // console.log(locations[i])
    let filteredPeople = people.filter((person) => person.location == locations[i])
    console.log(filteredPeople)
    let peopleEmoji = filteredPeople.map(person => person.picture)
    // console.log(peopleEmoji)
    document.getElementById(locations[i]).innerText = peopleEmoji
  }
}
drawPeople()
console.log(endGame())

// function drawPeople() {
//   for (let i = 0; i < locations.length; i++) {
//     let filteredPeople = people.filter(person => person.location == locations[i])
//     let personEmoji = filteredPeople.map(person => person.picture)
//     document.getElementById(locations[i]).innerText = personEmoji
//   }
// }
// drawPeople()



// //ANCHOR - Question 3
function makeBats(locationEmoji) {
  // console.log(locationEmoji)
  let foundPeople = people.filter((person) => person.location == locationEmoji)
  // console.log(foundPeople)
  for (let i = 0; i < foundPeople.length; i++) {
    // console.log(foundPeople[i])
    foundPeople[i].picture = '🦇'
    drawPeople()
  }
}

// function makeBats(locationEmoji) {
//   let foundPeople = people.filter(person => person.location == locationEmoji)
//   for (let i = 0; i < foundPeople.length; i++) {
//     foundPeople[i].picture = '🦇'
//     drawPeople()
//   }
// }



// //ANCHOR - Question 4
function endGame() {
  let deadPeople = people.filter(person => person.picture == '🦇')
  console.log(deadPeople)
  if (deadPeople.length == people.length - 1) {
    window.alert("Game Over")
    console.log(endGame)
  }
}



// //ANCHOR - Question 5
// for (i = 0; i < people.length; i++) {
// }


// //ANCHOR - Question 6