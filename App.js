import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Message from "./Message/Message";
import { store } from "./redux/store";
import { Provider } from "react-redux";
let App=()=>{
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/message" element={<Message />} />
             {/* <Route path="/counter" element={<Counter />} /> */}
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
