const getNewQuote = async () => {
  let url = "https://type.fit/api/quotes";
  const response = await fetch(url);
  const allQuotes = await response.json();
  const index = Math.floor(Math.random() * allQuotes.length);
  const quote = allQuotes[index].text;
  const text = document.getElementById("quote");
  text.innerHTML = quote;
};

getNewQuote();
