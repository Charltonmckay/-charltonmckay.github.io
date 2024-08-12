const animeDescriptions = {
  jjk: "Jujutsu Kaisen (JJK) is a dark fantasy anime that follows a group of sorcerers who battle cursed spirits. [Genre: Action, Dark Fantasy]",
  naruto: "Naruto follows the story of Naruto Uzumaki, a young ninja with a dream of becoming the strongest ninja and leader of his village. [Genre: Action, Adventure, Fantasy]",
  bleach: "Bleach is about Ichigo Kurosaki, who gains the powers of a Soul Reaper and protects the living world from evil spirits. [Genre: Action, Supernatural, Fantasy]",
  "demon-slayer": "Demon Slayer follows Tanjiro Kamado, who becomes a demon slayer after his family is slaughtered by demons. [Genre: Action, Dark Fantasy]",
  "dragonball-z": "Dragon Ball Z is the tale of Goku as he defends Earth from an array of powerful enemies. [Genre: Action, Adventure, Martial Arts]"
};

const fighterDescriptions = {
  "amanda-nunes": "Amanda Nunes is a two-division UFC champion known for her striking power and ground game. [Record: 21-4-0]",
  "dustin-poirier": "Dustin Poirier is a skilled lightweight fighter with impressive striking and grappling. [Record: 26-7-0]",
  "max-holloway": "Max Holloway is a former featherweight champion with a high-volume striking style. [Record: 22-6-0]",
  "gilbert-burns": "Gilbert Burns is a top welterweight with strong jiu-jitsu and knockout power. [Record: 20-4-0]",
  "justin-gaethje": "Justin Gaethje is known for his aggressive fighting style and knockout power. [Record: 22-3-0]"
};


document.querySelectorAll('.anime-item').forEach(item => {
  item.addEventListener('click', () => {
      alert(animeDescriptions[item.id]);
  });
});


document.querySelectorAll('.fighter-item').forEach(item => {
  item.addEventListener('click', () => {
      alert(fighterDescriptions[item.id]);
  });
});


const funFacts = [
  "Did you know? The shortest war in history lasted only 38 to 45 minutes.",
    "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    "Did you know? A single strand of spaghetti is called a 'spaghetto'.",
    "Did you know? Bananas are berries, but strawberries aren’t.",
    "Did you know? A group of flamingos is called a 'flamboyance'.",
    "Did you know? Octopuses have three hearts.",
    "Did you know? The Eiffel Tower can be 15 cm taller during the summer due to metal expansion in the heat.",
    "Did you know? Wombat poop is cube-shaped.",
    "Did you know? There are more stars in the universe than grains of sand on all the Earth's beaches.",
    "Did you know? The heart of a blue whale is so large that a human can swim through its arteries.",
    "Did you know? Some cats are allergic to humans.",
    "Did you know? The inventor of the Pringles can is now buried in one.",
    "Did you know? The dot over a lowercase 'i' and 'j' is called a 'tittle'.",
    "Did you know? A day on Venus is longer than a year on Venus.",
    "Did you know? A shrimp's heart is in its head.",
    "Did you know? The fingerprints of a koala are so indistinguishable from humans that they have on occasion been confused at a crime scene.",
    "Did you know? A crocodile cannot stick its tongue out.",
    "Did you know? Sloths can hold their breath longer than dolphins can.",
    "Did you know? There's a basketball court above the Supreme Court of the United States, known as the 'Highest Court in the Land'.",
    "Did you know? A sneeze travels at about 100 miles per hour.",
    "Did you know? Cows have best friends and can become stressed when they are separated.",
    "Did you know? Sea otters hold hands when they sleep to keep from drifting apart.",
    "Did you know? The first oranges weren’t orange. They were green.",
    "Did you know? There are more fake flamingos in the world than real ones.",
    "Did you know? A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
    "Did you know? Humans share 50% of their DNA with bananas.",
    "Did you know? The longest hiccuping spree lasted 68 years.",
    "Did you know? Butterflies can taste with their feet.",
    "Did you know? Kangaroos can’t walk backward.",
    "Did you know? The Empire State Building has its own zip code."
];

document.getElementById('click-me-button').addEventListener('click', () => {
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
  document.getElementById('fun-fact-display').innerText = randomFact;
});


const skillDescriptions = {
  js: "JavaScript is a versatile, high-level programming language used for creating interactive web pages. [Popular Uses: Web Development, Server-side Development]",
  python: "Python is a high-level, interpreted programming language known for its readability and wide range of applications. [Popular Uses: Data Science, Web Development, Automation]",
  html: "HTML (HyperText Markup Language) is the standard language for creating web pages. [Popular Uses: Web Development]",
  css: "CSS (Cascading Style Sheets) is used for describing the presentation of a document written in HTML or XML. [Popular Uses: Web Design, Layout]",
  sql: "SQL (Structured Query Language) is used for managing and manipulating relational databases. [Popular Uses: Database Management, Data Analysis]"
};

document.querySelectorAll('.skill-item').forEach(item => {
  item.addEventListener('click', () => {
      alert(skillDescriptions[item.id]);
  });
});

window.addEventListener('scroll', () => {
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
  } else {
      scrollToTopBtn.style.display = 'none';
  }
});

document.getElementById('scroll-to-top').addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});






