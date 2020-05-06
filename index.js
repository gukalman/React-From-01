/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

*/

import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class FirstFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { us_name: '' };
  }

  myChangeHandler = (event) => {
    this.setState({us_name: event.target.value});
  }

  render() {
    return (
      <div className="container">
        <div className="form-input">
          <h1>Form</h1>
          <form>
            <label>Neve:
            <input type='text' onChange={this.myChangeHandler} />
            </label>
          </form>
        </div>

        <div className="form-output"><h1>Output</h1>
        <p>Name: {this.state.us_name} </p>
        </div>

      </div>
    );

  }


}

ReactDOM.render(<FirstFrom />, document.getElementById('root'));