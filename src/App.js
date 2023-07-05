import React, { Component } from 'react';
import InfoInput from './components/InfoInput';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cv: false,
    }
  }

  viewCV = () => {
    if (this.state.cv) {
      this.setState({
        info: this.state.info,
        cv: false,
      });
    } else {
      this.setState({
        info: this.state.info,
        cv: true,
      });
    }
  }

  render() {
    const { cv } = this.state;
    if (cv) {
      return (
        <div>
          <InfoInput show={cv} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <h2>Personal information</h2>
          <InfoInput show={cv} />
          <h2>Experience</h2>
          <h2>Education</h2>
          <button onClick={this.viewCV}>View CV</button>
        </div>
      );
    }
  }
}

export default App;
