import React from 'react';
import {Link} from "react-router-dom";
import '../../stylesheets/index_item.css';
import {keys,vals} from  './LANGS';

export const IndexItem = ({doc}) => {
  const slice = doc.body ? doc.body.slice(0,30) : "";
  const title = doc.title ? doc.title.slice(0,35) : "";
  const fromLang = doc.language ? keys[vals.indexOf(doc.language.slice(0,2))] : "";
  const toLang = doc.language ? keys[vals.indexOf(doc.language.slice(3,doc.language.length))] : "";

  return (
    <li className="index-item">
       <div className="index-item-stats-container">
         <div className="index-item-stats">
           <span className="language-tag">
             Language: <span className="l-tag-small">
                        {fromLang}-{toLang}</span></span>
           <div className="index-title">Title: {title}...</div>
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
