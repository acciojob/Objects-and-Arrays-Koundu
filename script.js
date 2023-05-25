const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

const cap1 = {...person};
const team1 = [...players];
const team = players["reference"]

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;