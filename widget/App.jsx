import React, { Component } from 'react'

import './app.css';

import {CodeComponent} from './components/code/code';
import {StatusBar} from './components/status-bar/status-bar';
import {FieldSet} from './components/field-set/field-set';
import {FieldSetHeader} from './components/field-set-header/field-set-header';

class App extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.schema = props.schema;
    this.state = {
      headers: this.schema.headers,
      fields: this.schema.data,
      code: '',
    };
    this.onClick.bind(this);
    return this;
  }

  onClick = async () => {
    const {request, headers } = this.schema;
    try {
      const startTime = +new Date();
      const result = await fetch(request, headers);
      const responseBody = await result.json();
      const endTime = +new Date();

      const totalTime = endTime - startTime;

      this.setState({
        statusCode: result.status,
        code: JSON.stringify(responseBody, null, 2),
        totalTime,
      });

      document
        .querySelectorAll('pre code')
        .forEach(block => hljs.highlightBlock(block));
    } catch(err) {
      this.error = err;
    }
  }

  render() {
    return (
      <div className="widget-component">
        {this.state.headers ? <HeadersFieldsSet fields={this.state.headers}/> : null }
        {this.state.fields ? <FieldSet fields={this.state.fields}/> : null }
        <button onClick={this.onClick} type="button">Enviar</button>
        {this.state.statusCode ? <StatusBar status={this.state.statusCode} requestTime={this.state.totalTime} /> : null}
        {this.state.code ? <CodeComponent code={this.state.code}/> : null}
      </div>
    )
  }
}

export default App;
