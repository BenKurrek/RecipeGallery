import React, { useState } from "react";
import Container from "./components/Container/Container";
import { InputDataProvider } from "./context/InputDataContext";
import { RecipeDataProvider } from "./context/RecipeContext";
import "./styles/main.css";
import CartModal from "./components/Modal/CartModal";

function App() {
  const [currentFilters, setCurrentFilters] = useState({});
  const [cart, setCart] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <InputDataProvider>
      <RecipeDataProvider>
        <div className="App">
          <Container
            setIsModalOpen={setIsModalOpen}
            cart={cart}
            setCart={setCart}
            currentFilters={currentFilters}
            setCurrentFilters={setCurrentFilters}
          />
          <CartModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            cart={cart}
            setCart={setCart}
            currentFilters={currentFilters}
            setCurrentFilters={setCurrentFilters}
          />
        </div>
      </RecipeDataProvider>
    </InputDataProvider>
  );
}

export default App;
