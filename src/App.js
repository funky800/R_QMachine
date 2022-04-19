import{useState, useEffect} from'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

 	const [quote, setQuote] = useState({});

  const fetchQuote = ()=> {
  	fetch('https://api.quotable.io/random').then((response)=>{return response.json();}).then((data)=>{setQuote({
  		text: data.content,
  		author: data.author
  	});})
  };

  useEffect (()=> {
  	fetchQuote();
  }, []);

  return (
  <div className= "container-fluid">
  <div className="card">
  <div className= "card-header text-center">
  <h6>Random Quote Machine</h6>
  </div>
    <div className="App">
    <div id= "quote-box">
    <h1 id= "text">{quote.text}</h1>
    <p id= "author">{quote.author}</p>


    <button id="new-quote" type= "button" className= "btn btn-primary" onClick={fetchQuote}>New Quote</button>

    <a className= "btn btn-primary" href= {"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text" + quote.text}
    id="tweet-quote" role = "button">Tweet Quote
    </a>

    </div>
    </div>
    </div>      
    </div>
  );
}

export default App;
