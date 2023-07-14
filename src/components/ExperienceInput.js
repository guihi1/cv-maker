import React, { Component } from 'react';
import '../styles/input.css';
import '../styles/cv.css';

class ExpInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exp: {
        position: 'fjsdja',
        start: '5245',
        end: '4522',
      },
      edit: true,
      remove: false,
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

  render() {
    const { exp, edit, remove } = this.state;

    if (!edit && !remove) {
      return (
        <div className="section">
          <button onClick={this.changeEdit}>Edit</button>
          <button onClick={this.removeSection}>Delete</button>
          <div className="exp-box">
            <p>{exp.start} - {exp.end}</p>
            <p>{exp.position}</p>
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
          <button id="exp-button" onClick={this.changeEdit}>Submit</button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ExpInput;
