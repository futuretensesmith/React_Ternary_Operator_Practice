import React from "react";
import Form from "./Form";

var userIsRegistered = false;
//isRegistered below gets passed a prop to the Form component

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
