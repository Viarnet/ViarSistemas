import React, { useState } from "react";
import './styles.css'
function ListNumberPages({Click, number, active}) {
    
    return (
      <button className={`page-item ${active ? "active" : "inactive"}`} onClick={Click}>
       {number}
      </button>
    );
  }
export default ListNumberPages;