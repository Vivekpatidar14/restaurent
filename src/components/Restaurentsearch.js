import React, { Component } from "react";
import { Table ,FormControl, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default class Restaurentsearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      NoData: null,
    };
  }
  search(key) {
    console.log(key);
    fetch("http://localhost:3000/restaurent?q=" + key).then((resp) =>
      resp.json().then((result) => {
        console.log(result);

        if (result.length > 0) {
          this.setState({ searchData: result });
        } else {
          this.setState({ NoData: true });
        }
      })
    );
  }

  render() {
    return (
        <>
        <Container>
        <h2 className="text-center">Search Reastaurent </h2>
      <div className="text-center">
        <FormControl type="text"onChange={(event) => this.search(event.target.value)} placeholder="Search Place Only" className="form-control" />

       

        {this.state.searchData ? (
          <div>
            {" "}
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
                {this.state.searchData.map((item) => (
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
                      <span onClick={() => this.handleDelete(item.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <div>no data found</div>
        )}
        {this.state.NoData ? <h3>No Data Found</h3> : null}
      
      </div>
      </Container>
      </>
    );
  }
}
