// Effet d’écriture automatique
const letterText = document.getElementById("letterText");
const message = "Mon amour, chaque jour passé à tes côtés est un cadeau précieux. Tu es mon étoile, mon cœur, mon univers. 💖";
let i = 0;

document.getElementById("envelope").onclick = () => {
  document.getElementById("envelope").classList.add("hidden");
  document.getElementById("letter").classList.remove("hidden");
  typeWriter();
};

function typeWriter() {
  if (i < message.length) {
    letterText.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  } else {
    document.getElementById("photos").classList.remove("hidden");
    document.getElementById("counter").classList.remove("hidden");
    document.getElementById("game").classList.remove("hidden");
  }
}

// Compteur d’amour
const startDate = new Date("2025-08-11"); // à personnaliser
function updateCounter() {
  const now = new Date();
  const diff = Math.floor((now - startDate) / (1000*60*60*24));
  document.getElementById("counter").innerHTML = `Depuis que je t’aime : ${diff} jours ❤️`;
}
updateCounter();

// Mini-jeu simple
let caught = 0;
const gameArea = document.getElementById("gameArea");

function dropHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "absolute";
  heart.style.left = Math.random()*200 + "px";
  heart.style.top = "0px";
  heart.style.fontSize = "24px";
  gameArea.appendChild(heart);

  let pos = 0;
  const fall = setInterval(() => {
    if (pos > 300) {
      clearInterval(fall);
      if (gameArea.contains(heart)) {
        gameArea.removeChild(heart);
      }
    } else {
      pos += 5;
      heart.style.top = pos + "px";
    }
  }, 100);

  heart.onclick = () => {
    caught++;
    if (gameArea.contains(heart)) {
      gameArea.removeChild(heart);
    }
    if (caught === 5) {
      alert("Bravo ! Voici ton message caché : Je t’aimerai toujours 💞");
      clearInterval(heartInterval); // stoppe la génération des cœurs
      document.getElementById("map").classList.remove("hidden"); // affiche la carte
      document.getElementById("surpriseBtn").classList.remove("hidden"); // affiche le bouton
    }
  };
}

const heartInterval = setInterval(dropHeart, 2000);

// Quand on clique sur le bouton surprise finale → redirection vers message.html
document.getElementById("surpriseBtn").onclick = () => {
  window.location.href = "message.html"; // ouvre la nouvelle page
};
