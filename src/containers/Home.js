import React from 'react';
import { withSiteData, Link } from 'react-static';

export default withSiteData(() => (
  <div
    style={{
      textAlign: 'center'
    }}
  >
    <h1 style={{ textAlign: 'center' }}>Hello World.</h1>
    <Link to="/todo">
      <a href="#">go to todo list.</a>
    </Link>
  </div>
));
