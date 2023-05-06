import React, { Component } from 'react'

class InfoInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <p id="first-name">{this.props.firstName}</p>
          <button>Edit</button>
        </div>
        <div>
          <p id="last-name">{this.props.lastName}</p>
          <button>Edit</button>
        </div>
        <div>
          <p id="email">{this.props.email}</p>
          <button>Edit</button>
        </div>
        <div>
          <p id="phone">{this.props.phone}</p>
          <button>Edit</button>
        </div>
      </div>
    );
  }
}

export default InfoInput;
