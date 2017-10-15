import React from 'react';
import {Link} from "react-router-dom";

export const IndexItem = ({doc}) => {
  return (
    <li>
       ({doc.language}):{doc.title}: <Link to={`/documents/${doc.id}`}>See Translations</Link>
    </li>
  );
}
