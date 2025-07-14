import React from "react";

import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { PhotosList } from "./components/PhotosList";
import { BottomAppBar } from "./components/BottomAppBar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/photos" element={<PhotosList />} />
      </Routes>
      <Box>
        <BottomAppBar />
      </Box>
    </BrowserRouter>
  );
};

export default App;
