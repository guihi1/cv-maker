import React, { Component } from 'react'

class InfoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        firstName: 'Your name',
        lastName: 'Your last name',
        phoneNumber: 'Your phone number',
        email: 'Your email',
      },
      edit: false,
    }
  }

  handleInfoChange = data => (e) => {
    this.setState({
      info: {
        [data]: e.target.value,
      },
    });
  }

  render() {
    const { info, edit } = this.state;
    if (!edit) {
      return (
        <div>
          <p>{info.firstName}</p>
          <p>{info.lastName}</p>
          <p>{info.phoneNumber}</p>
          <p>{info.email}</p>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <label htmlFor="first-name" type="text"></label>
            <input id="first-name" />
            <button>Edit</button>
          </div>
          <div>
            <label htmlFor="last-name"></label>
            <input id="last-name" type="text" />
            <button>Edit</button>
          </div>
          <div>
            <label htmlFor="email"></label>
            <input id="email" type="email" />
            <button>Edit</button>
          </div>
          <div>
            <label htmlFor="phone"></label>
            <input id="phone" type="number" />
            <button>Edit</button>
          </div>
        </div>
      );
    }
  }
}

export default InfoInput;
