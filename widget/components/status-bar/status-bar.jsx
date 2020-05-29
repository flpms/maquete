import React from 'react';

import './status-bar.css'

const statusType = status => ((status > 199 && status < 300) ? 'success' : 'fail');

export const StatusBar = props => (
  <p class="status-bar">
    <span>Status Code:
      <span className={statusType(props.status)}> {props.status}</span>
    </span>
    <span className="request-time">
      {props.requestTime} ms
    </span>
  </p>
);
