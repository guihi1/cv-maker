import React, { Component } from 'react';
import '../styles/input.css';
import '../styles/cv.css';

class ExpInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exp: {
        position: 'fjsdja',
        company: 'fjdskaf',
        start: '5245',
        end: '4522',
      },
      edit: true,
      remove: false,
      display: 'hidden',
    }
  }

  handleExpChange = data => (e) => {
    this.setState({
      exp: {
        ...this.state.exp,
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
    const { exp, edit, remove, display } = this.state;

    if (!edit && !remove) {
      return (
        <div className="section" onMouseEnter={this.showButton} onMouseLeave={this.hideButton}>
          <div className="buttons-box">
            <button onClick={this.changeEdit} className={display}>Edit</button>
            <button onClick={this.removeSection} className={display}>Delete</button>
          </div>
          <div className="exp-box">
            <p>{exp.start} - {exp.end}</p>
            <div>
              <p><strong>{exp.position}</strong></p>
              <p>{exp.company}</p>
            </div>
          </div>
        </div>
      );
    } else if (edit && !remove) {
      return (
        <div className="section">
          <div className="input-box">
            <label htmlFor="position">Position</label>
            <input id="position" type="text" onChange={this.handleExpChange('position')} value={exp.position} />
          </div>
          <div className="input-box">
            <label htmlFor="start">Start year</label>
            <input id="start" type="text" onChange={this.handleExpChange('start')} value={exp.start} />
          </div>
          <div className="input-box">
            <label htmlFor="end">End year</label>
            <input id="end" type="text" onChange={this.handleExpChange('end')} value={exp.end} />
          </div>
          <div className="input-box">
            <label htmlFor="company">Company</label>
            <input id="company" type="text" onChange={this.handleExpChange('company')} value={exp.company} />
          </div>
          <button id="exp-button" onClick={this.changeEdit}>Submit</button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ExpInput;
