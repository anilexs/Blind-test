// // Récupérer les éléments HTML
// var audio = document.getElementById('myAudio');
// var playButton = document.getElementById('playButton');
// var pauseButton = document.getElementById('pauseButton');
// var stopButton = document.getElementById('stopButton');

// // Fonction de lecture
// function playAudio() {
//   audio.play();
// }

// // Fonction de pause
// function pauseAudio() {
//   audio.pause();
// }

// // Fonction d'arrêt
// function stopAudio() {
//   audio.pause();
//   audio.currentTime = 0;
// }

// // Associer les fonctions aux événements des boutons
// playButton.addEventListener('click', playAudio);
// pauseButton.addEventListener('click', pauseAudio);
// stopButton.addEventListener('click', stopAudio);

// // Récupérer les éléments HTML
// var audio = document.getElementById('myAudio');
// var durationElement = document.getElementById('duration');

// // Mettre à jour la durée restante
// function updateDuration() {
//   var duration = audio.duration;
//   var currentTime = audio.currentTime;
//   var remainingTime = duration - currentTime;

//   var minutes = Math.floor(remainingTime / 60);
//   var seconds = Math.floor(remainingTime % 60);

//   durationElement.textContent = 'Temps restant : ' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
// }

// // Associer la mise à jour à l'événement timeupdate de l'audio
// audio.addEventListener('timeupdate', updateDuration);

