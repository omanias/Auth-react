import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDted5j3AawK1n3liRtzp_9EN0IWpB63A0",
  authDomain: "auth-react-127a8.firebaseapp.com",
  projectId: "auth-react-127a8",
  storageBucket: "auth-react-127a8.appspot.com",
  messagingSenderId: "1088985509197",
  appId: "1:1088985509197:web:01e2bbe61203dbec695b04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
