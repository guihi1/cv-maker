import React, { Component } from 'react'

class EduInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edu: {
        uni: 'Uni name',
        start: '4893',
        end: '4233',
        area: 'Engineering',
      }
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

  render() {
    const { edu } = this.state;
    if (!this.props.edit) {
      return (
        <div>
          <div></div>
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
            <input id="degree" type="text" />
          </div>
          <button id="edu-button" onClick={this.props.mode(edu)}>Submit</button>
        </div>
      );
    }
  }
}


export default EduInput;
