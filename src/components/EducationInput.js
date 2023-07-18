import React, { Component } from 'react'
import '../styles/input.css'
import '../styles/cv.css'

class EduInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edu: {
        uni: 'Uni name',
        start: '4893',
        end: '4233',
        degree: 'Engineering',
      },
      edit: true,
      remove: false,
      display: 'hidden',
    }
  }

  handleEduChange = data => (e) => {
    this.setState({
      edu: {
        ...this.state.edu,
        [data]: e.target.value,
      }
    });
  }

  changeEdit = () => {
    if (this.state.edit) {
      this.setState({
        edit: false,
      });
    } else {
      this.setState({
        edit: true,
      });
    }
  }

  removeSection = () => {
    this.setState({
      remove: true,
    })
  }

  showButton = (e) => {
    e.preventDefault();
    this.setState({
      display: 'show',
    });
  }

  hideButton = (e) => {
    e.preventDefault();
    this.setState({
      display: 'hidden',
    });
  }

  render() {
    const { edu, edit, remove, display } = this.state;

    if (!edit && !remove) {
      return (
        <div className="section" onMouseEnter={this.showButton} onMouseLeave={this.hideButton}>
          <div className="buttons-box">
            <button onClick={this.changeEdit} className={display}>Edit</button>
            <button onClick={this.removeSection} className={display}>Delete</button>
          </div>
          <div className="edu-box">
            <p>{edu.start} - {edu.end}</p>
            <div>
              <h2>{edu.uni}</h2>
              <p>{edu.degree}</p>
            </div>
          </div>
        </div>
      );
    } else if (edit && !remove) {
      return (
        <div className="section">
          <div className="input-box">
            <label htmlFor="uni">University</label>
            <input id="uni" type="text" onChange={this.handleEduChange('uni')} value={edu.uni} />
          </div>
          <div className="input-box">
            <label htmlFor="start">Start year</label>
            <input id="start" type="text" onChange={this.handleEduChange('start')} value={edu.start} />
          </div>
          <div className="input-box">
            <label htmlFor="end">End year</label>
            <input id="end" type="text" onChange={this.handleEduChange('end')} value={edu.end} />
          </div>
          <div className="input-box">
            <label htmlFor="degree">Degree</label>
            <input id="degree" type="text" onChange={this.handleEduChange('degree')} value={edu.degree} />
          </div>
          <button id="edu-button" onClick={this.changeEdit}>Submit</button>
        </div>
      );
    } else {
      return null;
    }
  }
}


export default EduInput;
