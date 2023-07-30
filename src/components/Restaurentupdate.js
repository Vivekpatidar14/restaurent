import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Restaurentupdate = () => {
  const { id } = useParams();
  const [name, setName] = useState(null);
  const [addresss, setAddresss] = useState(null);
  const [email, setEmail] = useState(null);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/restaurent/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setName(result.name);
        setAddresss(result.addresss);
        setEmail(result.email);
        setRating(result.rating);
      });
  }, [id]);

  const updateRestaurant = () => {
    const updatedData = {
      name: name,
      addresss: addresss,
      email: email,
      rating: rating,
    };

    fetch(`http://localhost:3000/restaurent/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        alert('Your restaurant has been updated');
      });
  };

  return (
    <div>
        <form className='text-center'>
        <h1 className="text-center">Update Restaurant</h1>
        <input
          name="name"
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter restaurant name"
          value={name}
        /><br /><br />
        <input
          name="addresss"
          onChange={(event) => setAddresss(event.target.value)}
          placeholder="Enter restaurant address"
          value={addresss}
        /><br /><br />
        <input
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter restaurant email"
          value={email}
        /><br /><br />
        <input
          name="rating"
          onChange={(event) => setRating(event.target.value)}
          placeholder="Enter restaurant rating"
          value={rating}
        /><br /><br />

        <button type="button" onClick={updateRestaurant}>Update Restaurant</button>
        </form>
    </div>
  );
};

export default Restaurentupdate;
