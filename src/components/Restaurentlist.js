import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
export default class Restaurentlist extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/restaurent").then((response) => {
      response.json().then((result) => {
        // console.log(result);

        this.setState({ list: result });
      });
    });
  } 

  getData(){
    fetch("http://localhost:3000/restaurent").then((response) => {
      response.json().then((result) => {
        // console.log(result);

        this.setState({ list: result });
      });
    });
  }

  handleDelete(id) {
    fetch("http://localhost:3000/restaurent/" + id, {
      method: "DELETE",
    }).then((resp) =>
      resp.json().then((result) => {
        console.log(result);
        alert("Your restaurant has been deleted");
        this.getData();
      })
    );
  }
  
 

  render() {
    // console.log(this.state)
    return (
      <div>
        <h1 className="text-center">Restaurentlist</h1>

        {this.state.list ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>location</th>
                  <th>Email</th>
                  <th>Rating</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, i) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.addresss}</td>
                    <td>{item.email}</td>
                    <td>{item.rating}</td>
                    <td>
                      {" "}
                      <Link to={"/update/" + item.id}>
                        <FontAwesomeIcon icon={faPenToSquare} />{" "}
                      </Link>
                      <span onClick={()=>this.handleDelete(item.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Please wait, loading...</p>
        )}
      </div>
    );
  }
}
