import React, { Component } from 'react';
import InfoInput from './components/InfoInput';
import EduInput from './components/EducationInput';
import ExpInput from './components/ExperienceInput';
import './styles/cv.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      editInfo: true,
      eduArray: [<EduInput />],
      expArray: [<ExpInput />],
      displayEdu: 'hidden',
      displayExp: 'hidden',
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

  showButton = (section) => (e) => {
    e.preventDefault();
    this.setState({
      [section]: 'show',
    });
  }

  hideButton = (section) => (e) => {
    e.preventDefault();
    this.setState({
      [section]: 'hidden',
    });
  }

  render() {
    const { editInfo, eduArray, expArray, displayEdu, displayExp } = this.state;

    return (
      <div id="cv">
        <InfoInput edit={editInfo} mode={this.changeEditMode} />
        <div onMouseEnter={this.showButton('displayEdu')} onMouseLeave={this.hideButton('displayEdu')} className="title-button">
          <h2>Education</h2>
          <button onClick={this.addEduSection} className={displayEdu}>Add education</button>
        </div>
        {eduArray}
        <div onMouseEnter={this.showButton('displayExp')} onMouseLeave={this.hideButton('displayExp')} className="title-button">
          <h2>Professional appointments</h2>
          <button onClick={this.addExpSection} className={displayExp}>Add experience</button>
        </div>
        {expArray}
      </div>
    );
  }
}

export default App;
