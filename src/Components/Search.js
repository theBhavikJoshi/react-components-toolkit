import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WIKI_BASE_URL = 'https://en.wikipedia.org/w/api.php';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('github');
  const [searchResult, setSearchResult] = useState([]);
  
  useEffect(() => {
    const searchWiki = async () => {
      const { data } = await axios.get(WIKI_BASE_URL, {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: searchTerm
        }
      });
      setSearchResult(data.query.search);
    }

    if (searchTerm && !searchResult.length) {
      searchWiki();
    } else {
      const timeoutId = setTimeout(() => {
        if (searchTerm) {
          searchWiki();
        }
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      }
    }

  }, [searchResult.length, searchTerm]);

  const renderItems = searchResult.map(item => {

    return (
      <div className='item' key={item.pageid}>
        <div className="right floated content">
          <a
            className='ui button'
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
            target='_blank'
            rel="noopener noreferrer" 
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {item.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        </div>
      </div>
    )
  });


  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            type="text" 
            value={searchTerm} 
            onChange={ (e) => setSearchTerm(e.target.value) }
          />
        </div>
      </div>
      <div className="ui celled list">
        { renderItems }
      </div>
    </div>
  )
}

export default Search;
