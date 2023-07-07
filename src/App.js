import React, { Component } from 'react';
import InfoInput from './components/InfoInput';

class App extends Component {
  constructor() {
    super();

    this.state = {
      editInfo: true,
      editExp: true,
      editEdu: true,
    }
  }

  changeEditMode = (section) => {
    if (this.state[section]) {
      this.setState({
        [section]: false,
      });
    } else {
      this.setState({
        [section]: true,
      })
    }
  }

  render() {
    const { editInfo, editExp, editEdu } = this.state;

    return (
      <div className="App">
        <InfoInput edit={editInfo} mode={this.changeEditMode} />
      </div>
    );
  }
}

export default App;
