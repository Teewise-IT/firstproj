import { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
  });

  const [submit, setSubmit] = useState(false);
  //   const [valid, setValid] = useState(false);

  const handleFirstName = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastName = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (values.firstName && values.lastName) {
      //   setValid(true);
      console.log({
        firstName: values.firstName,
        lastName: values.lastName,
      });
    }
  };

  return (
    <div>
      Form
      <form onSubmit={handleSubmit}>
        <input
          className="rounded-md bg-gray-200"
          onChange={handleFirstName}
          type="text"
          value={values.firstName}
        ></input>
        {submit && !values.firstName ? (
          <span>Please enter your first name</span>
        ) : null}

        <input
          className="rounded-md bg-gray-200"
          onChange={handleLastName}
          type="text"
          value={values.lastName}
        ></input>
        {submit && !values.lastName ? (
          <span>Please enter your last name</span>
        ) : null}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
