import React from 'react';
import { Link } from 'react-router';
import './index.scss';

const Root = () =>
  <div>
    <h1 className="RootTitle">
      Welcome to my-react-app
    </h1>
    <p>
      Try our <Link to={`/profile-builder`}>Profile Builder</Link>.
    </p>
  </div>;

export default Root;
