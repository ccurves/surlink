import React from "react";
import Home from "./pages/Home";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Error404 from "./pages/Error404";

var host = window.location.protocol + "//" + window.location.host;
let url = `${host}/assets/js/theme.min.js`;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>

      <Helmet>
        <script language="javascript" src={url}></script>
      </Helmet>
    </div>
  );
}

export default App;
