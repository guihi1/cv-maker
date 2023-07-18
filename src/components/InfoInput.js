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
        desc: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
      },
      display: "hidden",
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
    const { info, display } = this.state;
    if (!this.props.edit) {
      return (
        <div className="section" onMouseEnter={this.showButton} onMouseLeave={this.hideButton}>
          <button onClick={this.props.mode} className={display}>Edit</button>
          <h1 className="info" id="name">{info.firstName} {info.lastName}</h1>
          <p className="info"><strong>E-mail</strong> {info.email}</p>
          <p className="info"><strong>Phone</strong> {info.phone}</p>
          <p>{info.desc}</p>
        </div>
      );
    } else {
      return (
        <div className="section">
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
