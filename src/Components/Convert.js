import React, { useEffect, useState } from 'react';

const Convert = ({ language, text }) => {

  const [ translatedText, setTranslatedText ] = useState('');

  useEffect(() => {

    // Language Translation Code here

  }, [language, text]);

  return (
    <div>
      <h1 className="ui header">{ translatedText }</h1>
    </div>
  )
}

export default Convert;
