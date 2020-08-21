import React, { useState } from 'react';

const Accordion = ({ items }) => {

  const [activeElement, setActiveElement] = useState(null);

  const renderItems = items.map(item => {

    const isActive = activeElement === item.id ? 'active' : '';

    return (
      <React.Fragment key={item.id}>
        <div 
          className={`title ${isActive}`}
          onClick={ () => activeElement === item.id ? setActiveElement(null) : setActiveElement(item.id) }
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${isActive}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  });

  return (
    <div className='ui styled accordion'>
      { renderItems }
    </div>
  )
}

export default Accordion;
