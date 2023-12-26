import { useState } from "react";
import Form from "./components/Form";
import UserInfo from "./components/UserInfo";

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    profession: "",
    agreement: false,
  });
  const [showData, setShowData] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
    setShowData((prev) => true);
  };

  const goBack = () => {
    setShowData((prev) => false);

    setUserData((prev) => ({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      profession: "",
      agreement: false,
    }));
  };

  return (
    <main className="main--container">
      {!showData && <h1>Basic React Form</h1>}
      {!showData && (
        <Form
          userData={userData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
      {showData && <UserInfo userData={userData} goBack={goBack} />}
    </main>
  );
}

export default App;
