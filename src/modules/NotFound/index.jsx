import React from 'react';
import './index.css'

class NotFound extends React.Component {
  render() {
    return (
      <div className = "NotFound">
        <div>
          <h1 className = "NotFoundTitle" > 404 </h1>
        </div>
        <div className = "NotFoundText" > Not Found </div>
      </div>
    );
  }
};

export default NotFound;
