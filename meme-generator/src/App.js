import React from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="container">
      <Header />
      <Form />
      <Meme />
      <Footer />
    </div>
  );
}

export default App;
