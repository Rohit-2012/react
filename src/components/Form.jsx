import { useId } from "react";

const Form = ({ userData, handleChange, handleSubmit }) => {
  const id = useId();

  return (
    <form onSubmit={handleSubmit}>
      <div className="text--input">
        <label htmlFor={id + "firstName"}>First Name:</label>
        <input
          type="text"
          id={id + "firstName"}
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="text--input">
        <label htmlFor={id + "lastName"}>Last Name:</label>
        <input
          type="text"
          id={id + "lastName"}
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="text--input">
        <label htmlFor={id + "email"}>Email:</label>
        <input
          type="email"
          id={id + "email"}
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </div>
      <div className="text--input">
        <label htmlFor={id + "password"}>Password:</label>
        <input
          type="password"
          id={id + "password"}
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </div>
      <fieldset>
        <legend>Gender:</legend>
        <div className="radio--input">
          <input
            type="radio"
            id={id + "male"}
            name="gender"
            value="male"
            checked={userData.gender === "male"}
            onChange={handleChange}
          />
          <label htmlFor={id + "male"}>Male</label>
        </div>
        <div className="radio--input">
          <input
            type="radio"
            id={id + "female"}
            name="gender"
            value="female"
            checked={userData.gender === "female"}
            onChange={handleChange}
          />
          <label htmlFor={id + "female"}>Female</label>
        </div>
        <div className="radio--input">
          <input
            type="radio"
            id={id + "transgender"}
            name="gender"
            value="transgender"
            checked={userData.gender === "transgender"}
            onChange={handleChange}
          />
          <label htmlFor={id + "transgender"}>Transgender</label>
        </div>
      </fieldset>
      <div className="select">
        <label htmlFor={id + "profession"}>Profession:</label>
        <select
          name="profession"
          id={id + "profession"}
          value={userData.profession}
          onChange={handleChange}
        >
          <option value="">--CHOOSE--</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="unemployed">Unemployed</option>
        </select>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          name="agreement"
          id={id + "agreement"}
          checked={userData.agreement}
          onChange={handleChange}
        />
        <label htmlFor={id + "agreement"}>
          I hereby accept the terms and conditions.
        </label>
      </div>
      <button>SUBMIT</button>
    </form>
  );
};

export default Form;
