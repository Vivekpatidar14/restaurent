import React, { Component } from 'react';

export default class RestaurentCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      addresss: null,
      email: null,
      rating: null,
    };
  }

  handleSubmit = () => {
    console.warn(this.state);
    fetch("http://localhost:3000/restaurent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then((resp) => resp.json().then((result) => {
      console.log(result);
      alert("Your new restaurant has been added ");
    }));
  }

  render() {
    return (
      <div>
        <form className='text-center'>
          <h1 className='text-center'> Create Restaurent</h1>
          <input name="name" onChange={(event) => this.setState({ name: event.target.value })} placeholder="Enter restaurant name" /><br /><br />
          <input name="address" onChange={(event) => this.setState({ addresss: event.target.value })} placeholder="Enter restaurant address" /><br /><br />
          <input name="email" onChange={(event) => this.setState({ email: event.target.value })} placeholder="Enter restaurant email" /><br /><br />
          <input name="rating" onChange={(event) => this.setState({ rating: event.target.value })} placeholder="Enter restaurant rating" /><br /><br />

          <button type="button" onClick={this.handleSubmit}>Add restaurant</button>
        </form>
      </div>
    );
  }
}
