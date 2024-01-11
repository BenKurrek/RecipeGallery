import React from "react";
import Container from "./components/Container/Container";
import { InputDataProvider } from "./context/InputDataContext";
import { RecipeDataProvider } from "./context/RecipeContext";
import "./styles/main.css";
import CartModal from "./components/Modal/CartModal";

function App() {
  // State and context setup here (if needed)

  return (
    <InputDataProvider>
      <RecipeDataProvider>
        <div className="App">
          <Container />
        </div>
      </RecipeDataProvider>
    </InputDataProvider>
  );
}

export default App;
