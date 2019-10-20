import React from "react";
import Books from "./pages/Books";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer";
import "./normalize.css";

function App() {
  return (
    <Wrapper>
      <Header />
      <SubHeader />
      <Books />
      <Footer />
    </Wrapper>
  );
}

export default App;
