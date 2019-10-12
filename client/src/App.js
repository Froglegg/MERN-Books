import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Wrapper>
      <Nav />
      <Books />
    </Wrapper>
  );
}

export default App;
