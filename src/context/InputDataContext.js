import React, { createContext, useState, useEffect } from "react";
import jsonData from "../assets/data/exported_input_data.json";

export const InputDataContext = createContext();

export const InputDataProvider = ({ children }) => {
  // The JSON data is directly assigned to the context's value here
  return (
    <InputDataContext.Provider value={jsonData}>
      {children}
    </InputDataContext.Provider>
  );
};
