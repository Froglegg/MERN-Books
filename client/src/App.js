import React from "react";
import Books from "./pages/Books";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import "./normalize.css";

function App() {
  return (
    <Wrapper>
      <Books />
      <Footer />
    </Wrapper>
  );
}

export default App;
