import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ label, options, selected, onSelectChange }) => {
  
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {

    const onBodyClick = e => {
      if (ref.current.contains(e.target)) return;

      setOpen(!open);
    }

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    }

  }, [open]);
  
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
    <div ref={ref} className='ui form'>
      <div className="field">
        <label className="label">{label}</label>
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
