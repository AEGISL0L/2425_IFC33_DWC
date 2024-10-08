// Note Constructor Function
function Note(name, type) {
    this.name = name;
    this.type = type;
}

// Add Note to Search
function addNoteToSearch(noteName, type) {
    const note = new Note(noteName, type);
    searchNotes.push(note);
}

// Play Sound Function
function playSound(note) {
    const audio = new Audio(`assets/sounds/${note}.mp3`);
    audio.play();
}

// Add Event Listeners to Piano Keys
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const whiteKey = key.querySelector('.white-key');
        const blackKey = key.querySelector('.black-key');
        if (whiteKey) playSound(whiteKey.id);
        if (blackKey) playSound(blackKey.id);
    });
});

// Search Function
function searchScores(scores, query) {
    const result = scores.find(score => score[0].toLowerCase() === query.toLowerCase());
    if (result) {
        playSong(result[1]);
    } else {
        console.log("Song not found");
    }
}

// Play Song Function
function playSong(notes) {
    notes.forEach((note, index) => {
        setTimeout(() => playSound(note.name), index * 500);
    });
}

// Create Notes for "La Balanguera"
const note1 = new Note("DO", "");
const note2 = new Note("RE", "");
const searchNotes = [note1, note2];

// Define Scores
const laBalanguera = ["La Balanguera", [
    new Note("DO", ""),
    new Note("RE", ""),
    new Note("MI", ""),
    new Note("FA", ""),
    new Note("FA", ""),
    new Note("SOL", ""),
    new Note("SOL", ""),
    new Note("LA", "#"),
    new Note("LA", "#")
]];

const happyBirthday = ["Happy Birthday", [
    new Note("DO", ""),
    new Note("DO", ""),
    new Note("RE", ""),
    new Note("DO", ""),
    new Note("FA", ""),
    new Note("MI", "")
]];

const scores = [laBalanguera, happyBirthday];

// Add Event Listener to Search Form
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    searchScores(scores, query);
});