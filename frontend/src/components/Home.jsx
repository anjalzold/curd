import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const [val, setVal] = useState([]);

  async function getData() {
    const data = await axios.get("http://localhost:4000");
    setVal(data.data);
    console.log(data.data);
  }

  async function handleDelete(id) {
    const del = await axios.delete(`http://localhost:4000/${id}`);
    if (!del) {
      console.log("Error in Deleting");
    } else {
      console.log("Sucess Deleted");
    }
  }

  useEffect(() => {
    getData();
  }, [handleDelete]);

  return (
    <div className='data'>
      <h1
        style={{
          color: "white",
          textTransform: "capitalize",
          marginBottom: "12px",
        }}
      >
        Modify Form{" "}
      </h1>
      {val.map(emaill => (
        <div key={emaill._id}>
          <h1>{emaill.email}</h1>
          <button onClick={() => handleDelete(emaill._id)}>Delete</button>
          <Link to={`/update/${emaill._id}`}>
            <button>Update</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
