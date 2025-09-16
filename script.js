const quoteS = document.getElementById("quote-s");
const author = document.getElementById("author");

async function loadQuotes() {
  try {
    const response = await fetch("quotes.json");
    const quotes = await response.json();

    return quotes;
  } catch (err) {
    console.error("Error loading quotes", err);
  }
  //empty array return for do not program crash
  return [];
}

async function getRandomQuote() {
  const quotes = await loadQuotes();
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  console.log(quote);
  quoteS.innerText = quote.q;
  author.innerText = quote.a;
}
getRandomQuote();

function tweet() {
  const tweetText = encodeURIComponent(
    `${quoteS.innerText}\n  \n — ${author.innerText}`
  );

  const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const popupWidth = Math.min(600, screenWidth - 60);
  const popupHeight = Math.min(400, screenHeight - 60);

  window.open(
    twitterUrl,
    "Tweet Window",
    `width=${popupWidth}, height=${popupHeight},resizable=yes,scrollbars=yes`
  );
}
