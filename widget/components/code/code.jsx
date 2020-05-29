import React from 'react';

import './code.css'

export const CodeComponent = props => (
  <pre class="code-component">
    <code className="json">{props.code}</code>
  </pre>
);
