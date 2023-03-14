import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  //Sdk correspondiente al proyecto
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
