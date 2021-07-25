import React from "react";

import Layout from "./Components/Menubar/Layout/Layout";
import NewsList from "./Components/NewsList";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Layout />
      <NewsList />
    </div>
  );
}
