import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Chicago.css'



export function ChicagoCitationForm() {
  const [citationType, setCitationType] = useState('book');
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [url, setUrl] = useState('');
  const [citation, setCitation] = useState('');

  const [citationType1, setCitationType1] = useState('book');
  const [author1, setAuthor1] = useState('');
  const [publicationDate1, setPublicationDate1] = useState('');
  const [title1, setTitle1] = useState('');
  const [publisher1, setPublisher1] = useState('');
  const [url1, setUrl1] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const citation = citationType === 'book'
      ? `${author}, ${title} (${publicationDate}). ${publisher}.`
      : `${author}, "${title}," ${url}.`;
    setCitation(citation);
    setAuthor('');
    setTitle('');
    setPublisher('');
    setPublicationDate('');
    setUrl('');
    alert(citation)
  }

  function handleSubmit1(event) {
    event.preventDefault();
    let citation;
    if (citationType === 'book') {
      citation = `${author1} (${publicationDate1}). ${title1}. ${publisher1}.`;
    } else {
      citation = `${author1}. (${publicationDate1}). ${title1}. Retrieved from ${url1}`;
    }
    setAuthor1('');
    setPublicationDate1('');
    setTitle1('');
    setPublisher1('');
    setUrl1('');
    alert(citation); // or display on label
  }

  return (
    <>
    <nav><Link to={'/cites'}>{"<"}</Link></nav>
    <div className="chicago-citation-form">
      
      <form className='formcite'  onSubmit={handleSubmit}>
        <h1>CHICAGO</h1>
        <div>
          <input
            type="radio"
            id="book"
            name="citation-type"
            value="book"
            checked={citationType === 'book'}
            onChange={() => setCitationType('book')}
          />
          <label htmlFor="book">Book</label>
        </div>
        <div>
          <input
            type="radio"
            id="url"
            name="citation-type"
            value="url"
            checked={citationType === 'url'}
            onChange={() => setCitationType('url')}
          />
          <label htmlFor="url">URL</label>
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            />
            </div>
            <div>
            <label htmlFor="title">Title:</label>
            <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            />
            </div>
            {citationType === 'book' && (
            <div>
            <label htmlFor="publisher">Publisher:</label>
            <input
            type="text"
            id="publisher"
            value={publisher}
            onChange={(event) => setPublisher(event.target.value)}
            />
            </div>
            )}
            <div>
            <label htmlFor="publication-date">Publication Date:</label>
            <input
            type="text"
            id="publication-date"
            value={publicationDate}
            onChange={(event) => setPublicationDate(event.target.value)}
            />
            </div>
            {citationType === 'url' && (
            <div>
            <label htmlFor="url-input">URL:</label>
            <input
            type="text"
            id="url-input"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            />
            </div>
            )}
            <button type="submit">Generate Citation</button>
            </form>
            <div className="citation-label">
            
            </div>


        <form className='formcite' onSubmit={handleSubmit1}>
        <div>
            <h1>APA</h1>
          <input
            type="radio"
            id="book"
            name="citation-type"
            value="book"
            checked={citationType1 === 'book'}
            onChange={() => setCitationType1('book')}
          />
          <label htmlFor="book">Book</label>
        </div>
        <div>
          <input
            type="radio"
            id="url"
            name="citation-type"
            value="url"
            checked={citationType1 === 'url'}
            onChange={() => setCitationType1('url')}
          />
          <label htmlFor="url">URL</label>
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author1}
            onChange={(event) => setAuthor1(event.target.value)}
            />
            </div>
            <div>
            <label htmlFor="title">Title:</label>
            <input
            type="text"
            id="title"
            value={title1}
            onChange={(event) => setTitle1(event.target.value)}
            />
            </div>
            {citationType1 === 'book' && (
            <div>
            <label htmlFor="publisher">Publisher:</label>
            <input
            type="text"
            id="publisher"
            value={publisher1}
            onChange={(event) => setPublisher1(event.target.value)}
            />
            </div>
            )}
            <div>
            <label htmlFor="publication-date">Publication Date:</label>
            <input
            type="text"
            id="publication-date"
            value={publicationDate1}
            onChange={(event) => setPublicationDate1(event.target.value)}
            />
            </div>
            {citationType1 === 'url' && (
            <div>
            <label htmlFor="url-input">URL:</label>
            <input
            type="text"
            id="url-input"
            value={url1}
            onChange={(event) => setUrl1(event.target.value)}
            />
            </div>
            )}
            <button type="submit">Generate Citation</button>
            </form>
            <div className="citation-label">
            
            </div>
            </div>
            </>

            
  )
}