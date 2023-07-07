import React, { Component } from 'react'
import '../styles/input.css';
import '../styles/cv.css';

class InfoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        firstName: 'Your name',
        lastName: 'Your last name',
        phoneNumber: '543245245',
        email: 'Your email',
      },
    }
  }

  handleInfoChange = data => (e) => {
    this.setState({
      info: {
        ...this.state.info,
        [data]: e.target.value,
      }
    });
  }

  render() {
    const { info } = this.state;

    if (!this.props.edit) {
      return (
        <div className="form">
          <h1>Information</h1>
          <button onClick={() => this.props.mode('editInfo')}>Edit</button>
          <p className="info">First name: {info.firstName}</p>
          <p className="info">Last name: {info.lastName}</p>
          <p className="info">Email: {info.email}</p>
          <p className="info">Phone: {info.phone}</p>
        </div>
      );
    } else {
      return (
        <div className="form">
          <h1>Information</h1>
          <div className="input-box">
            <label htmlFor="first-name">First name</label>
            <input id="first-name" type="text" onChange={this.handleInfoChange('firstName')} value={info.firstName} />
          </div>
          <div className="input-box">
            <label htmlFor="last-name">Last name</label>
            <input id="last-name" type="text" onChange={this.handleInfoChange('lastName')} value={info.lastName} />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={this.handleInfoChange('email')} value={info.email} />
          </div>
          <div className="input-box">
            <label htmlFor="phone">Phone number</label>
            <input id="phone" type="text" onChange={this.handleInfoChange('phoneNumber')} value={info.phone} />
          </div>
          <button id="info-button" onClick={() => this.props.mode('editInfo')}>Submit Info</button>
        </div>
      );
    }
  }
}

export default InfoInput;
