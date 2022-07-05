import React from "react";

import styles from "./Form.module.scss";
import { getBaseUrl } from "../../utils";

const Form = () => {
  const handlerSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      age: e.target.age.value,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = `${getBaseUrl()}/api/users`;

    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();

    console.log(result.data);

    setTimeout(() => {
      e.target.reset();
    }, 1000);

    // alert(`${result.data}`);
  };

  return (
    <form onSubmit={handlerSubmit} className={styles.form}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        min={2}
        max={10}
        required
      />
      <label htmlFor="age">Age</label>
      <input type="number" name="age" required />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
