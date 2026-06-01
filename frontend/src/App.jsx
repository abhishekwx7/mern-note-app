import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="retro">
      <button className="btn btn-outline">click me</button>
      <button className="btn btn-neutral">click me</button>
      <button className="btn btn-primary">click me</button>
      <button className="btn btn-accent">click me</button>
      <button className="btn btn-info">click me</button>
      <button className="btn btn-warning">click me</button>
      <button className="btn btn-error">click me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
