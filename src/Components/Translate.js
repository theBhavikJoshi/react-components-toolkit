import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const languageDropdownData = [
  {
    label: 'Afrikaans',
    id: 1,
    value: 'af'
  },
  {
    label: 'Arabic',
    id: 2,
    value: 'ar'
  },
  {
    label: 'Hindi',
    id: 3,
    value: 'hi'
  },
  {
    label: 'Dutch',
    id: 4,
    value: 'nl'
  }
]

const Translate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageDropdownData[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
      </div>
      <br/>
      <Dropdown 
        label='Select a Language'
        options={languageDropdownData}
        selected={selectedLanguage}
        onSelectChange={setSelectedLanguage}
      />
      <br />
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert language={selectedLanguage} text={text} />
    </div>
  )
}

export default Translate;
