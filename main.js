// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Functions that change the color of the keys below

const keyPlay = function(event) {
  event.target.style.backgroundColor = 'green';
}

const keyReturn = function(event) {
  event.target.style.background = '';
}

// Function with event handler properties

let eventAssignment = function(note) {
  note.onmousedown = function () {
   keyPlay(event); 
  }
   note.onmouseup = function () {
   keyReturn(event); 
  }
}

// Loop that runs the array elements through the function
notes.forEach(eventAssignment); 

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// Stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// Hiding all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Anonymous event handler property and function for the first progress button
nextOne.onclick = function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;

  document.getElementbyId('letter-note-five').innerHTML = 'D'
  document.getElementbyId('letter-note-six').innerHTML = 'C'
}
// Anonymous event handler property and function for the second progress button

nextTwo.onclick = function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;

  document.getElementbyId('word-five').innerHTML = 'DEAR'
  document.getElementbyId('word-six').innerHTML = 'FRI-'
}

// Anonymous event handler property and function for the third progress button


// Event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}