import React from 'react';

import './field-set.css'

const types = {
  'boolean': 'checkbox',
  'string': 'text',
  'number': 'number'
};

const getKeys = obj => Object.keys(obj);
const isObject = type => type === 'object';

export const FieldSet = props => {
  const fieldSet = fields => getKeys(fields).map(key => {
    if (isObject(fields[key].type)) {
      return (
        <div className="object">
          <span className="key">"{key}": &#123;</span>
            {fieldSet(fields[key].properties)}
          &#125;
        </div>
      );
    }

    return (
      <div className="field">
        <label className="key">"{key}":</label>
        {fields[key].type === 'string' ? "\"" : null}
        <input type={types[fields[key].type]} name={key} placeholder={fields[key].type}/>
        {fields[key].type === 'string' ? "\"" : null},
      </div>
    );
  });

  return (<div className="field-set">
    <h6>BODY</h6>
    &#123;
      <div className="body">
        {fieldSet(props.fields)}
      </div>
    &#125;
  </div>);
};
