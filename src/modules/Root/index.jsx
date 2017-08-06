import React from 'react';
import { Link } from 'react-router';
import './index.scss';

const Root = () =>
  <div>
    <h1 className="RootTitle">
      Welcome to my-react-app
    </h1>
    <p>
      Try our
       <ul>
         <li><Link to={`/profile-builder`}>Profile Builder</Link></li>
         <li><Link to={`/todos`}>Todos</Link></li>
       </ul>
    </p>
  </div>;

export default Root;
