import './Search.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [lan, setLan] = useState('EN'); // state variable for language selection

  const handleSubmit = async (e) => {
    if (!query || query=="") return
    e.preventDefault();

    const formData = new FormData();
    formData.append('q', query)

    const response = await fetch(`http://localhost:3001/hello`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ q: query, lan: lan })
        });

    const data = await response.json();
    console.log(response);
    const formattedResults = data?.map((sult) => ({
      title: sult.title,
      summary: sult.summary,
      link: sult.link,
      cite_tool: sult.cite_tool,
      author_id: sult.author_id,
    }));

    setResults(formattedResults || []);
  };

  const handleLanguageChange = (e) => {
    setLan(e.target.value); // update the state of `lan` based on the user's selection
  }

  return (
    <div className="search-container">
      <nav><Link to='/search'>{"<"}</Link></nav>
      <h1 className="search-title">Search Engine</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <label className="search-label" htmlFor="search-input">
          Search for papers:
        </label>
        <div className="search-input-container">
          <select value={lan} onChange={handleLanguageChange}>
            <option value="EN">EN</option>
            <option value="ES">ES</option>
          </select>
          <input
            id="search-input"
            className="search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </div>
      </form>
      <div className="search-results">
        <ul className="search-results-list">
          {results.map((result) => (
            <li key={result.cite_tool} className="search-result-item">
              <a href={result.link} className="search-result-title">
                {result.title}
              </a>
              <p className="search-result-summary">{result.summary}</p>
              <p className="search-result-author">Cite Tool {result.cite_tool}</p>
              <a href={result.link} className="search-result-title">
                {result.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Resumes(){
    const [inputValue, setInputValue] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [response, setResponse] = useState("");
  
    async function handleSubmit(event) {
      event.preventDefault();
  
      if (selectedOption === "URL") {
        const formdata = new FormData();
        formdata.append("key", "0c8fd3e2baeddbc2e10718842bb11d09");
        formdata.append("url", inputValue);
        formdata.append("sentences", 10);
  
        const requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };
  
        const res = await fetch(
          "https://api.meaningcloud.com/summarization-1.0",
          requestOptions
        );
        const data = await res.json();
        setResponse(data.summary);
      } else if (selectedOption === "BOOK" || selectedOption === "TEXT") {
        const res = await fetch(`https://api.openai.com/v1/completions`, {
          body: JSON.stringify({
            model: "text-davinci-003",
            prompt: `Make a resume about this ${selectedOption}: ${inputValue}. Proporcionar en formato de lista`,
            temperature: 0,
            max_tokens: 700
          }),
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer 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",
          },
        });
        const data = await res.json();
        const text = data.choices[0].text;
        setResponse(text);
      }
    }
  
    return (
      <div>
        <nav><Link to='/search'>{"<"}</Link></nav>
        <form onSubmit={handleSubmit} className='mainsquare'>
          <label>
            Enter {selectedOption === "URL" ? "URL" : "book or text"}:
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <br />
          <label>
            Select the input type:
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">Select an option</option>
              <option value="URL">URL</option>
              <option value="BOOK">Book</option>
              <option value="TEXT">Text</option>
            </select>
          </label>
          <br />
          <button type="submit">Submit</button>
          
            <label id='co'>
                {response}
            </label>
        
        </form>

          
      </div>
    );
}

export function Assistance(){
    const [inputValue, setInputValue] = useState("");
    const [selectValue, setSelectValue] = useState("Define");
    const [responseText, setResponseText] = useState("");
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSelectChange = (event) => {
      setSelectValue(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      
      event.preventDefault();
  
      const prefix = selectValue + " ";
      const response = await fetch(
        `https://api.openai.com/v1/completions`,
        {
          body: JSON.stringify({
            model: "text-davinci-003",
            prompt: prefix + inputValue + 'Tener en cuenta, el lenguaje y proposito academico, de no ser apropiada la pregunta, no responderla. Enviar en formato adecuado (parrafos, saltos de linea, etc)',
            temperature: 0,
            max_tokens: 500,
          }),
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer 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",
          },
        }
      );
  
      const { choices } = await response.json();
      const { text } = choices[0];
  
      setResponseText(text);
    };
  
    return (
        <>
        <nav><Link to='/search'>{"<"}</Link></nav>
      <form id='assistancecon'onSubmit={handleSubmit} className='mainsquare'>
        <div>
          <label htmlFor="input">Input:</label>
          <input
            type="text"
            id="input"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="select">Select:</label>
          <select id="select" value={selectValue} onChange={handleSelectChange}>
            <option value="Define">Define</option>
            <option value="Analyze">Analyze</option>
            <option value="Create">Create</option>
            <option value="Explain">Explain</option>
            <option value="Write">Write</option>
            <option value="Design">Design</option>
            <option value="List">List</option>
            <option value="Points">Points</option>
            <option value="Brainstorm">Brainstorm</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        {responseText && (
          <div id='preresponse'>
            {selectValue =='List' &&
            <pre><code>{responseText}</code></pre>
            }
            {selectValue !='List' &&
             <label id="response">{responseText}</label>
            }
           
          </div>
        )}
      </form>
      </>
    );
}



