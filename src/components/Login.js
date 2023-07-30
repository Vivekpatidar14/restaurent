import React, { Component } from 'react'
import {Button,Form} from 'react-bootstrap';


export default class Login extends Component {
    constructor(){
    super();
    this.State={
        email:"",
        password:"",
    }
    }
SubmitEvent(){
    console.log(this.state);
    fetch("http://localhost:3000/login?q=" +this.state.email).then((resp) =>
    resp.json().then((result) => {
      console.log(result);
    if(result.length>0){
      console.log(this.props.history.push("list"))
    } 
    else{
      alert("please check your password and email")
    }
    })
  );
}


  render() {
    const formContainerStyles = {
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        height: '60vh', // Adjust the height as needed
      };
    
    return (
      <>   
       <h2 className='text-center'>login Form</h2>
        <div style={formContainerStyles}>
       
         <Form  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(event)=>{this.setState({email:event.target.value})}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(event)=>{this.setState({password:event.target.value})}} />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={()=>this.SubmitEvent()}>
        Submit
      </Button>
    </Form>
    </div>
      </>
    )
  }
}
