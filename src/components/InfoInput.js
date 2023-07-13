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
        phone: '543245245',
        email: 'Your email',
        desc: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
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
          <button onClick={this.props.mode}>Edit</button>
          <h1 className="info">{info.lastName} {info.firstName}</h1>
          <p className="info"><strong>E-mail</strong> {info.email}</p>
          <p className="info"><strong>Phone</strong> {info.phone}</p>
          <p>{info.desc}</p>
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
            <input id="phone" type="text" onChange={this.handleInfoChange('phone')} value={info.phone} />
          </div>
          <div className="input-box">
            <label htmlFor="description">Describe yourself</label>
            <textarea rows="5" cols="33" value={info.desc}></textarea>
          </div>
          <button id="info-button" onClick={this.props.mode}>Submit Info</button>
        </div>
      );
    }
  }
}

export default InfoInput;
