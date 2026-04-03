// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import { ToastContainer } from "react-toastify";
//
// import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Entries from "./pages/Entries";
// import About from "./pages/About";
// import NotFound from "./pages/NotFound";

import Navbar from "./other/Navbar";
import Footer from "./other/Footer";
import Hero from "./other/Hero";
import Projects from "./other/Projects";
import Skills from "./other/Skills";

const App = () => {
  return (
    // <Provider store={store}>
    //   <BrowserRouter>
    //     <ToastContainer />
    //     <Routes>
    //       <Route path="/" element={<Layout />}>
    //         <Route index element={<Home />} />
    //         <Route path="login" element={<Login />} />
    //         <Route path="signup" element={<Signup />} />
    //         <Route path="entries" element={<Entries />} />
    //         <Route path="about" element={<About />} />
    //         <Route path="*" element={<NotFound />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </Provider>
    <>
      <Navbar />

      {/* <div id="home"><Navbar /></div> */}
      <div id="about"><Hero /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="footer"><Footer /></div>
    </>
  );
};

export default App;














































