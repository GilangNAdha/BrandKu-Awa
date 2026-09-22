import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

const App = () => {
  const [isLogin] = useState(true);

  return (
    <BrowserRouter>
      <Header />

      <div className="text-green-500">
        {isLogin ? "HOME" : "ABOUT"}

        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </section>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default App;