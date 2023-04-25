import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Posts from "./components/posts/Posts";
import About from "./components/about/About";
import Travel from "./components/travel/Travel";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Fragment>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/travel" element={<Travel />} />
      </Routes>
      <Fragment>
        <Footer />
      </Fragment>
    </Fragment>
  );
}

export default App;
