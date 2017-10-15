import React from 'react';
import {Link} from "react-router-dom";
import '../../stylesheets/index_item.css';

export const IndexItem = ({doc}) => {
  return (
    <li className="index-item">
       <span>{doc.language}</span>
       <div>{doc.title}: {doc.body.slice(0,25)}...</div>
       <Link to={`/documents/${doc.id}`}>See Translations</Link>
    </li>
  );
}
