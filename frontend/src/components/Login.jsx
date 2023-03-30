import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
  const initial = { email: "", password: "" };
  const [data, setData] = useState(initial);

  const { email, password } = data;

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function handleClick(e) {
    e.preventDefault();
    const post = await axios.post("http://localhost:4000/login", data);
    if (!post) {
      console.log("Error");
    }
    console.log("Success");
  }
  return (
    <div>
      <form>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            value={email}
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
            value={password}
            onChange={e => handleChange(e)}
          />
        </div>

        <button
          type='submit'
          className='btn btn-primary'
          onClick={e => handleClick(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
};
