import React from "react";
import Books from "./pages/Books";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./normalize.css";

function App() {
  return (
    <Wrapper>
      <Header />
      <Books />
      <Footer />
    </Wrapper>
  );
}

export default App;
