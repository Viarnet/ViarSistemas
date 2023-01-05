import React from 'react';
import './styles.css'
export function SelectComponent({value, handleOnChange, children}) {
  return (
    <div className="select">
      <select value={value} onChange={handleOnChange} >
        {children}
      </select>
    </div>
  )
}