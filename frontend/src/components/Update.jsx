import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const Update = () => {
  const initial = { name: "", email: "", password: "" };
  const [data, setData] = useState(initial);

  const { name, email, password } = data;

  const { id } = useParams();

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setVal({ ...val, [name]: value });
  }

  const goThere = useNavigate();

  const [val, setVal] = useState({});

  async function getData() {
    const data = await axios.get(`http://localhost:4000/${id}`);
    setVal(data.data);
    console.log(data.data);
  }

  useEffect(() => {
    getData();
  }, []);

  async function handleClick(e) {
    e.preventDefault();
    const post = await axios.put(`http://localhost:4000/${id}`, data);
    if (!post) {
      console.log("Error");
    }
    console.log("Success");
    goThere("/");
  }
  return (
    <div>
      <form className=''>
        <h1 style={{ textAlign: "center" }}>Update Form</h1>

        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            value={val.name}
            name='name'
            onChange={e => handleChange(e)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            value={val.email}
            name='email'
            onChange={e => handleChange(e)}
          />
          <div id='emailHelp' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            name='password'
            value={val.password}
            onChange={e => handleChange(e)}
          />
        </div>

        <button
          type='submit'
          className='btn btn-primary'
          onClick={e => handleClick(e)}
        >
          Update
        </button>
      </form>
    </div>
  );
};
