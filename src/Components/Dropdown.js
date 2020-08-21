import React, { useState } from 'react'

const Dropdown = ({ options, selected, onSelectChange }) => {
  
  const [open, setOpen] = useState(false);
  
  const renderOptions = options.map(option => {
    if ( option.value === selected.value ) return null;

    return (
      <div 
        className="item" 
        key={ option.value }
        onClick={ () => onSelectChange(option) }
      >
        { option.label }
      </div>
    )
  });

  return (
    <div className='ui form'>
      <div className="field">
        <label className="label">Select a Color</label>
        <div 
          className={`ui selection dropdown ${open ? 'visible active' : '' }`}
          onClick={() => setOpen(!open) }
        >
          <i className="dropdown icon"></i>
          <div className="text">{ selected.label }</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            { renderOptions }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;
