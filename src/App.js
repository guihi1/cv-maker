import React, { Component } from 'react';
import InfoInput from './components/InfoInput';

class App extends Component {
  constructor() {
    super();

    this.state = {
      info: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
      },
      cv: false,
    }
  }

  handleInfoChange = (data) => {
    changeInfo = (e) => {
      this.setState(
        info: {
        [data]: e.target.value,
      }
      );
    }
  }

  viewCV = () => {
    this.setState({
      info: this.state.info,
      cv: true,
    });
  }

  backToForm = () => {
    this.setState({
      info: this.state.info,
      cv: false,
    });
  }

  render() {
    const { info, cv } = this.state;

    if (cv) {
      return (
        <div>CV</div>
      );
    } else {
      return (
        <div className="App">
          <h1>CV maker</h1>
          <h2>Personal information</h2>
          <InfoInput />
        </div>
      );
    }
  }
}

export default App;
