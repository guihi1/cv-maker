import React, { Component } from 'react'

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

  render() {
    const { edu, edit } = this.state;
    if (!edit) {
      return (
        <div>
          <button onClick={this.changeEdit}>Edit</button>
          <h2>Education</h2>
          <p>{edu.uni}</p>
          <p>{edu.start} - {edu.end}</p>
          <p>{edu.degree}</p>
        </div>
      );
    } else {
      return (
        <div>
          <label htmlFor="uni">University</label>
          <input id="uni" type="text" onChange={this.handleEduChange('uni')} value={edu.uni} />
          <div />
          <div>
            <label htmlFor="start">Start year</label>
            <input id="start" type="text" onChange={this.handleEduChange('start')} value={edu.start} />
          </div>
          <div>
            <label htmlFor="end">End year</label>
            <input id="end" type="text" onChange={this.handleEduChange('end')} value={edu.end} />
          </div>
          <div>
            <label htmlFor="degree">Degree</label>
            <input id="degree" type="text" onChange={this.handleEduChange('degree')} value={edu.degree} />
          </div>
          <button id="edu-button" onClick={this.changeEdit}>Submit</button>
        </div>
      );
    }
  }
}


export default EduInput;
