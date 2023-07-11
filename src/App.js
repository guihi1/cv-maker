import React, { Component } from 'react';
import InfoInput from './components/InfoInput';
import EduInput from './components/EducationInput';
import ExpInput from './components/ExperienceInput';

class App extends Component {
  constructor() {
    super();

    this.state = {
      editInfo: true,
      eduIndex: [0],
      eduArray: [<EduInput />],
      expArray: [<ExpInput />],
    }
  }

  changeEditMode = (section) => (e) => {
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

  addSection = (section) => {
    this.setState({
      [section]: this.state[section].concat(<EduInput />),
    });
  }

  render() {
    const { editInfo, editExp, editEdu } = this.state;

    return (
      <div className="App">
        <InfoInput edit={editInfo} mode={this.changeEditMode} />
        <button onClick={() => this.addSection('eduArray')}>Add</button>
        {this.state.eduArray}
      </div>
    );
  }
}

export default App;
