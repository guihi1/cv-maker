import React, { Component } from 'react';
import InfoInput from './components/InfoInput';
import EduInput from './components/EducationInput';
import ExpInput from './components/ExperienceInput';

class App extends Component {
  constructor() {
    super();

    this.state = {
      editInfo: true,
      eduArray: [<EduInput />],
      expArray: [<ExpInput />],
    }
  }

  changeEditMode = () => {
    if (this.state.editInfo) {
      this.setState({
        editInfo: false,
      });
    } else {
      this.setState({
        editInfo: true,
      })
    }
  }

  addEduSection = () => {
    this.setState({
      eduArray: this.state.eduArray.concat(<EduInput />),
    });
  }

  addExpSection = () => {
    this.setState({
      expArray: this.state.expArray.concat(<ExpInput />),
    });
  }

  render() {
    const { editInfo, eduArray, expArray } = this.state;

    return (
      <div className="App">
        <InfoInput edit={editInfo} mode={this.changeEditMode} />
        <button onClick={this.addEduSection}>Add education</button>
        {eduArray}
        <button onClick={this.addExpSection}>Add experience</button>
        {expArray}
      </div>
    );
  }
}

export default App;
