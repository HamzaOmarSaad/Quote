const quotes = [
    "The best way to predict the future is to create it. – Peter Drucker",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Opportunities don’t happen, you create them. – Chris Grosser",     
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "The future depends on what you do today. – Mahatma Gandhi",
    
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];


if (randomIndex === lastIndex) {
        newQuote();
        return;
    }
    lastIndex = randomIndex;

}

