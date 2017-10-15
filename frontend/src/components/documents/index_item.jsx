import React from 'react';
import {Link} from "react-router-dom";
import '../../stylesheets/index_item.css';

export const IndexItem = ({doc}) => {
  const slice = doc.body ? doc.body.slice(0,35) : "";

  return (
    <li className="index-item">
       <div className="index-item-stats-container">
         <div className="index-item-stats">
           <span className="language-tag">Language: <span className="l-tag-small">{doc.language}</span></span>
           <div className="index-title">Title: {doc.title}</div>
           <div>Preview: "{slice}..."</div>
         </div>

         <div className="index-item-button-div">
             <Link to={`/documents/${doc.id}`}>
               <button className="show-button">See Translations</button></Link>
               <span>Posted by: {doc.owner}</span>
         </div>
       </div>
    </li>
  );
}
