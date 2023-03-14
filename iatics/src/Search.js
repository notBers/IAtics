import './Search.css';
import { useState } from 'react';

export function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

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
        body: JSON.stringify({ q: query })
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

  return (
    <div className="search-container">
      <h1 className="search-title">Search Engine</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <label className="search-label" htmlFor="search-input">
          Search for papers:
        </label>
        <div className="search-input-container">
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