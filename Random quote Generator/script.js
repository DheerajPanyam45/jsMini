const quotes = [
    "Believe you can and you're halfway there. 💪✨",
"The only limit to our realization of tomorrow is our doubts of today. 🚀🌟",
"Do what you can, with what you have, where you are. 🧠⚙️",
"You miss 100% of the shots you don’t take. 🏀🎯",
"Success is not final, failure is not fatal: It is the courage to continue that counts. 🏆🔥",
"Hardships often prepare ordinary people for an extraordinary destiny. 🛤️🌈",
"Don’t watch the clock; do what it does. Keep going. ⏰➡️",
"The future belongs to those who believe in the beauty of their dreams. 🌠💭",
"It always seems impossible until it's done. 🧗✅",
"Push yourself, because no one else is going to do it for you. 🚴‍♂️💨",
"The way to get started is to quit talking and begin doing. 🛠️🚀",
"Don’t be afraid to give up the good to go for the great. 🌱🌳",
"If you’re going through hell, keep going. 🔥🚶‍♂️",
"Dream big and dare to fail. 🌌⚡",
"Act as if what you do makes a difference. It does. 🌍❤️",
]


const usedQuotes = new Set();
const quoteTag = document.getElementById("quote");

function generateQuote(){
    if(usedQuotes.size >= quotes.length) {
        // quoteTag.innerHTML = "All quotes have been used. Please refresh the
        usedQuotes.clear();}
    while (true) {
        const randomIndex = Math.floor(Math.random() * quotes.length);

        if(usedQuotes.has(randomIndex)) {
            continue;
        }
        const randomQuote = quotes[randomIndex];
        quoteTag.innerHTML = randomQuote;
        usedQuotes.add(randomIndex); 
        break;
    }
    }
    // quoteTag.innerHTML = "hello"
   