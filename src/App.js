import React from "react";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Gallery from "./components/Gallery";
import CartModal from "./components/Modal/CartModal";
import "./App.css"; // Or import GlobalStyles if using styled-components

function App() {
  // State and context setup here (if needed)

  return (
    <div className="App">
      <Container>
        <Sidebar />
        <main>
          <TopBar />
          <Gallery />
        </main>
      </Container>
      <CartModal />
    </div>
  );
}

export default App;
